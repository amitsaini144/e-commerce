import { PriceDetailsProps } from "../types";

export default function PriceDetails({ total, discount, savings, totalPriceBeforeDiscount }: PriceDetailsProps) {
    return (
        <div className="bg-white mt-6 lg:mt-0 px-6 py-3">
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-4">PRICE DETAILS</h2>
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Price</p>
                    <p className="font-medium">₹{totalPriceBeforeDiscount.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Discount</p>
                    <p className="text-green-600 font-medium">- ₹{discount.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Delivery Charges</p>
                    <p className="text-green-600 font-medium">FREE</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">Secured Packaging Fee</p>
                    <p className="font-medium">₹129</p>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-3">
                    <p className="font-semibold">Total Amount</p>
                    <p className="font-semibold">₹{total.toLocaleString('en-IN')}</p>
                </div>
            </div>
            <div className="mt-4 text-green-600 text-sm">
                You will save ₹{savings.toLocaleString('en-IN')} on this order
            </div>
        </div>
    );
}