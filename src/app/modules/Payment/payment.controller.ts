import { asyncHandler } from '../../utils/global/asyncHandler';
import { Transaction } from '../Transaction/transaction.model';
import { Listing } from '../Listing/listing.model';

const paymentSuccessController = asyncHandler(async (req, res) => {
  const { transactionId } = req.params;
  if (transactionId) {
    const transaction = await Transaction.findOneAndUpdate(
      { transactionId },
      { status: 'completed' },
      { new: true },
    );
    if (transaction?.itemID) {
      await Listing.findByIdAndUpdate(transaction.itemID, { status: 'sold' });
    }
  }
  res.redirect(`https://product-reselling-frontend.vercel.app/success`);
});

const paymentFailController = asyncHandler(async (req, res) => {
  res.redirect(`https://product-reselling-frontend.vercel.app/failed`);
});

const paymentCancelController = asyncHandler(async (req, res) => {
  res.redirect(`https://product-reselling-frontend.vercel.app/cancelled`);
});

export const PaymentControllers = {
  paymentSuccessController,
  paymentFailController,
  paymentCancelController,
};
