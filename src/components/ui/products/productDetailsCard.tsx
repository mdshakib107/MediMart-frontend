// pages/product/[id].tsx
import { Button } from "@/components/ui/button";
import { TMedicine } from "@/types";
import { CreditCard, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RelatedProducts from "./relatedProducts";

const ProductDetails = async ({ medicine }: { medicine: TMedicine }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-white p-4 rounded-md my-5 shadow-sm">
        <div>
          <Image
            src={medicine?.Img}
            alt="product image"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-80"
          />
        </div>
        <div className="bg-white rounded-md p-4">
          <h2 className="font-bold text-xl mb-4">{medicine?.name}</h2>
          <p className="text-justify text-gray-500 font-light text-sm">
            {medicine?.description}
          </p>
          <p className="font-bold mt-2">Price: ${medicine?.price}</p>

          <div className="flex  mt-4">
            <Link href={`/chackout}`} passHref>
              <Button
                variant="outline"
                className="flex items-center gap-2 mr-2"
              >
                <CreditCard className="w-5 h-5" />
                Buy Now
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2 ml-4">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="w[98%] mx-auto my-5 p-4 ">
        {" "}
        <h3 className="font-bold text-lg ">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4"></div>
        <RelatedProducts medicine={medicine} />
      </div>
    </div>
  );
};

export default ProductDetails;
