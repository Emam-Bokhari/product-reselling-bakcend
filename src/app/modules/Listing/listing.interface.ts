import { Types } from 'mongoose';
import {
  TDistrict,
  TListingCategory,
  TListingCondition,
} from './listing.constant';

export type TListing = {
  title: string;
  description: string;
  price: number;
  condition: TListingCondition;
  images: string[];
  userID?: Types.ObjectId;
  status?: 'available' | 'sold';
  category: TListingCategory;
  brand?: string;
  location: TDistrict;
  negotiable?: 'yes' | 'no';
  warranty?: string;
  contactNumber?: string;
  isDeleted?: false;
};
