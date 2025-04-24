import { CartProduct } from "@/redux/features.ts/cartSlice";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

const CartProductCard = ({ product }: { product: CartProduct }) => {
  return (
    <div className="bg-white rounded-lg flex p-5 gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src={product?.Img as string}
          height={200}
          width={200}
          alt={product?.name}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">{product?.name}</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Required Prescription:</span>{" "}
            <span className="font-semibold">{product?.requiredPrescription}</span>
          </p>
          <p>
            <span className="text-gray-500">Strength:</span>{" "}
            <span className="font-semibold">
              {product.strength}
            </span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-green-700">
            Price: ${product.price}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold">Quantity</p>
            <Button variant="outline" className="size-8 rounded-sm">
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              {product?.orderQuantity}
            </p>
            <Button variant="outline" className="size-8 rounded-sm">
              <Plus />
            </Button>
            <Button variant="outline" className="size-8 rounded-sm">
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
