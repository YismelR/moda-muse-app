import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import burgerBars from '@/assets/burger-bars.svg';
import { cardCategories } from '../homepage/FeatureCards';
export default function ProductButton() {
  return (
    <Sheet>
      <SheetTrigger className="text-black font-medium text-base flex place-items-center gap-1 hover:bg-hover rounded-md px-2">
        <img src={burgerBars} alt="bars" className="size-6" />
        Product
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="gap-4">
          <SheetTitle>What section are you Looking for?</SheetTitle>
          <SheetDescription className="flex flex-col gap-8 text-base font-semibold">
            {cardCategories.map((category, idx) => (
              <span className="relative group cursor-pointer" key={idx}>
                <span className="relative z-10 inline-block">
                  {category.title}
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-hover transform scale-x-0 origin-left transition-transform duration-300 ease-in group-hover:scale-x-100"></span>
              </span>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
