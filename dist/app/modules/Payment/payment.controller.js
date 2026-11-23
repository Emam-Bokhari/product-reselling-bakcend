"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentControllers = void 0;
const asyncHandler_1 = require("../../utils/global/asyncHandler");
const transaction_model_1 = require("../Transaction/transaction.model");
const listing_model_1 = require("../Listing/listing.model");
const paymentSuccessController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionId } = req.params;
    if (transactionId) {
        const transaction = yield transaction_model_1.Transaction.findOneAndUpdate({ transactionId }, { status: 'completed' }, { new: true });
        if (transaction === null || transaction === void 0 ? void 0 : transaction.itemID) {
            yield listing_model_1.Listing.findByIdAndUpdate(transaction.itemID, { status: 'sold' });
        }
    }
    res.redirect(`https://product-reselling-frontend.vercel.app/success`);
}));
const paymentFailController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.redirect(`https://product-reselling-frontend.vercel.app/failed`);
}));
const paymentCancelController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.redirect(`https://product-reselling-frontend.vercel.app/cancelled`);
}));
exports.PaymentControllers = {
    paymentSuccessController,
    paymentFailController,
    paymentCancelController,
};
