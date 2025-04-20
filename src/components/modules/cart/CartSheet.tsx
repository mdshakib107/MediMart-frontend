import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";
const CartSheet = () => {
    return (
        <Sheet >
        <SheetTrigger>
          <ShoppingCart className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent >
          <SheetHeader>
            <SheetTitle className="text-center text-2xl">MediMart Cart</SheetTitle>
            <SheetDescription className="text-center">
              Your carted medicine will apear here
            </SheetDescription>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>
    );
};

export default CartSheet;