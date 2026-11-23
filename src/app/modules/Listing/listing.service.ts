import { HttpError } from '../../errors/HttpError';
import { User } from '../User/user.model';
import { TListing } from './listing.interface';
import { Listing } from './listing.model';

const createListing = async (payload: TListing, identifier: string) => {
  const user = await User.findOne({ identifier: identifier });
  if (!user) {
    throw new HttpError(404, 'User not found');
  }
  payload.userID = user?._id;
  const createdListing = await Listing.create(payload);
  return createdListing;
};

const getAllListings = async () => {
  const listings = await Listing.find().populate(
    'userID',
    '_id name identifier role',
  );
  if (listings.length === 0) {
    throw new HttpError(404, 'No listing record were found in the database');
  }
  return listings;
};

const getListingsByCategory = async (category: string) => {
  const normalized = category.toLowerCase().trim();
  const aliasMap: Record<string, string[]> = {
    mobile: ['mobiles', 'mobile'],
    mobiles: ['mobiles', 'mobile'],
    clothes: ['cloths', 'clothes', 'clothing', 'fashion'],
    cloths: ['cloths', 'clothes', 'clothing', 'fashion'],
    clothing: ['cloths', 'clothes', 'clothing', 'fashion'],
    fashion: ['cloths', 'clothes', 'clothing', 'fashion'],
    electronics: ['electronics', 'electronic'],
    electronic: ['electronics', 'electronic'],
    vehicles: ['vehicles', 'vehicle'],
    vehicle: ['vehicles', 'vehicle'],
    property: ['property', 'properties'],
    properties: ['property', 'properties'],
    home: ['home'],
    pets: ['pets', 'pet'],
    pet: ['pets', 'pet'],
    sports: ['sports', 'sport'],
    sport: ['sports', 'sport'],
  };

  const matchValues = aliasMap[normalized] || [normalized];
  const query = {
    $or: [
      { category: { $in: matchValues } },
      { category: { $regex: new RegExp(`^${normalized}`, 'i') } },
    ],
  };

  const listings = await Listing.find(query).populate(
    'userID',
    '_id name identifier role',
  );

  return listings;
};

const getListingsBySpecificUser = async (identifier: string) => {
  const user = await User.isUserExists(identifier);
  if (!user) {
    throw new HttpError(404, 'User not found');
  }

  const listings = await Listing.find({ userID: user._id }).populate(
    'userID',
    '_id name identifier role',
  );

  if (listings.length === 0) {
    throw new HttpError(404, 'No listing were found provide this user ID');
  }

  return listings;
};

const getListingById = async (id: string) => {
  const listing = await Listing.findById(id).populate(
    'userID',
    '_id name identifier role',
  );
  if (!listing) {
    throw new HttpError(404, 'No listing found with ID');
  }
  return listing;
};

const updateListingById = async (
  id: string,
  payload: Partial<TListing>,
  identifier: string,
) => {
  // check if user is exists
  const userExists = await User.isUserExists(identifier);

  if (!userExists) {
    throw new HttpError(404, 'User not found');
  }

  const user = await User.findOne({ identifier: identifier });

  if (!user) {
    throw new HttpError(404, 'User not found');
  }

  const listing = await Listing.findOne({ _id: id, userID: user._id });

  if (!listing) {
    throw new HttpError(403, 'You are not allowed to update this listing');
  }

  const updatedListing = await Listing.findOneAndUpdate(
    { _id: id, isDeleted: false },
    payload,
    { new: true, runValidators: true },
  );

  if (!updatedListing) {
    throw new HttpError(404, 'No listing found with ID');
  }

  return updatedListing;
};

const updateListingStatusById = async (
  id: string,
  status: string,
  identifier: string,
) => {
  // check if user exists
  const user = await User.isUserExists(identifier);
  if (!user) throw new HttpError(404, 'User not found');

  // update listing status
  const updatedListingStatus = await Listing.findOneAndUpdate(
    { _id: id, userID: user._id },
    { status },
    { runValidators: true, new: true },
  );

  if (!updatedListingStatus)
    throw new HttpError(
      403,
      'You are not allowed to update this listing status',
    );

  return updatedListingStatus;
};

const deleteListingById = async (id: string, identifier: string) => {
  // check if user is exists
  const userExists = await User.isUserExists(identifier);

  if (!userExists) {
    throw new HttpError(404, 'User not found');
  }

  // find the user by identifier
  const user = await User.findOne({ identifier: identifier });

  if (!user) {
    throw new HttpError(404, 'User not found');
  }

  // find the listing by its id and check if it belongs to the user
  const listing = await Listing.findOne({ _id: id, userID: user._id });

  if (!listing) {
    throw new HttpError(403, 'You are not allowed to delete this listing');
  }

  const deletedListing = await Listing.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );

  return deletedListing;
};

const deleteListingByAdmin = async (id: string, identifier: string) => {
  const user = await User.isUserExists(identifier);

  if (!user) {
    throw new HttpError(404, 'User not found');
  }

  // Check if the user is an admin
  if (user.role !== 'admin') {
    throw new HttpError(403, 'You are not authorized to perform this action');
  }

  const deletedListing = await Listing.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true },
    { new: true },
  );

  if (!deletedListing) {
    throw new HttpError(404, 'No listing were found in the database');
  }

  return deletedListing;
};

export const ListingServices = {
  createListing,
  getAllListings,
  getListingsByCategory,
  getListingsBySpecificUser,
  getListingById,
  updateListingStatusById,
  updateListingById,
  deleteListingById,
  deleteListingByAdmin,
};
