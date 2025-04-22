import AllProducts from "@/components/ui/products/AllProduct";

export const metadata = {
  title: "MediMart | Shop",
  description: "This is the MediMart Shop page",
};

const ShopPage = () => {
  return (
    <div className="p-8">
      <AllProducts />
    </div>
  );
};

export default ShopPage;
