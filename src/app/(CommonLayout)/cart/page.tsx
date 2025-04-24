import Address from "@/components/modules/cart/Address";
import CartProducts from "@/components/modules/cart/CartProducts";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";

const CartPage = () => {
    return (
        <div className=" flex flex-col lg:grid grid-cols-12 gap-8 my-5 container mx-auto">
        <CartProducts />
        <Address/>
        <PaymentDetails/>
      </div>
    );
};

export default CartPage; 