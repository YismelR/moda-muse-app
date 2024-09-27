import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function CartButton() {
  return (
    <Sheet>
      <SheetTrigger className="px-2 text-black text-base hover:bg-hover rounded-md">
        Cart
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-4">
          <SheetTitle>Cart Summary</SheetTitle>
          <SheetDescription className="flex flex-col gap-8 text-base font-semibold">
            Cart is Empty
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
