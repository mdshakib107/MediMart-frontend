// components/ProductCard.tsx
import { Button } from "@/components/ui/button";
import { TMedicine } from "@/types";
import { Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ medicine }: { medicine: TMedicine }) => {
  return (
    <div className="border p-4 rounded-md shadow-blue-200 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <Image
        src={medicine?.Img}
        alt={medicine?.name}
        width={150}
        height={150}
        className="rounded-md w-full object-cover"
      />
      <h4 className="font-semibold text-sm mt-2">{medicine?.name}</h4>
      {/* <p className="text-gray-500 text-xs">{medicine?.description}</p> */}
      <p className="font-bold mt-2">${medicine?.price}</p>

      {/* Quick Details Button */}
      <div className="flex justify-between items-center mt-4">
        <Link href={`/shop/${medicine?._id}`} passHref>
          <Button variant="outline" className="flex items-center gap-2 ">
            <Info className="w-5 h-5" />
            View Details
          </Button>
        </Link>
        <Button variant="outline" className="flex items-center gap-2 ">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
