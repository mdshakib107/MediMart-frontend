import InfiniteProductList from "@/components/ui/products/inifinityScroll";

export const metadata = {
  title: "MediMart | Shop",
  description: "This is the MediMart Shop page",
};

const ShopPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Medicines</h1>
      <InfiniteProductList />
    </div>
  );
};

export default ShopPage;
