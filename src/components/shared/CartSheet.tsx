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
        <Sheet>
        <SheetTrigger>
          <ShoppingCart className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>
          <Cart />
        </SheetContent>
      </Sheet>
    );
};

export default CartSheet;