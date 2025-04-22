// components/ProductCard.tsx
import { Button } from "@/components/ui/button";
import { TMedicine } from "@/types";
import { Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ medicine }: { medicine: TMedicine }) => {
  return (
    <div className="border p-4 rounded-md shadow-blue-200 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-90 overflow-hidden rounded-md group">
        <Image
          src={medicine?.Img as string}
          alt={medicine?.name}
          fill
          className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <h4 className="font-semibold text-sm mt-2">{medicine?.name}</h4>
      <p className="font-bold mt-2">${medicine?.price}</p>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-auto pt-4">
        <Link href={`/shop/${medicine?._id}`} passHref>
          <Button variant="outline" className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            View Details
          </Button>
        </Link>
        <Button variant="outline" className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
