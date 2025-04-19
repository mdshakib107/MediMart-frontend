import { getAllProducts } from "@/services/Product";

export const metadata = {
  title: "MediMart | Shop",
  description: "This is the MediMart Shop page",
};

const ShopPage = async () => {
  const { data: medicines } = await getAllProducts();

  console.log(medicines);
  return (
    <div>
      <h1>This is Shop page</h1>
    </div>
  );
};

export default ShopPage;
