import CartProducts from "@/components/modules/cart/CartProducts";

const CartPage = () => {
    return (
        <div className="grid grid-cols-12 gap-8 my-5 container mx-auto">
        <CartProducts />
      </div>
    );
};

export default CartPage;