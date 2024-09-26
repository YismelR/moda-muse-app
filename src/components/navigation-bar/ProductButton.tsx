import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import burgerBars from "@/assets/burger-bars.svg";

export default function ProductButton() {
  return (
    <Sheet>
      <SheetTrigger className="text-black font-medium text-base flex place-items-center gap-1">
        <img src={burgerBars} alt="bars" className="size-6" />
        Product
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
