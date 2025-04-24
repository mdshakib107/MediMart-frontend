"use client";

import CustomButton from "@/components/shared/CustomButton";
import { CartProduct, resetCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// Optional currency formatter
const currencyFormatter = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const PaymentDetails = () => {
  // redux
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const subTotal = cart.medicines.reduce(
    (total: number, product: CartProduct) =>
      total + product.price * product.orderQuantity,
    0
  );

  const shippingCost = !cart.city ? 0 : cart.city === "Dhaka" ? 50 : 300;
  const grandTotal = subTotal + shippingCost;

  //* order handle
  const handleOrder = () => {
    // Perform order submission logic (e.g., sending data to an API)

    // Once the order is placed, reset the cart
    dispatch(resetCart());
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>

      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(subTotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(shippingCost)}</p>
        </div>
      </div>

      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>

      <CustomButton
        textName="Order Now"
        handleAnything={handleOrder}
        className="w-full font-semibold py-1!"
      />
    </div>
  );
};

export default PaymentDetails;
