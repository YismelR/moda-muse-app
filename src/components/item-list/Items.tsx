import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useItems } from '@/hooks/useItems';
import StarRating from './StarRating';

export default function Items() {
  const { items, error } = useItems();

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {items.map((item) => (
        <Dialog>
          <DialogTrigger>
            <Card
              key={item.id}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl"
            >
              <CardHeader className="flex place-items-center">
                <img src={item.image} className=" w-60 h-72 object-contain" />
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <CardTitle>{item.title}</CardTitle>
                <p>${item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <StarRating rating={item.rating.rate} />
                <p>({item.rating.rate})</p>
              </CardFooter>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="gap-8">
              <DialogTitle>{item.title}</DialogTitle>
              <DialogDescription>
                <div className="grid grid-cols-2 gap-8">
                  <img src={item.image} className=" w-60 h-72 object-contain" />
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-2xl text-black">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="line-clamp-4 hover:line-clamp-none cursor-pointer">
                      {item.description}
                    </p>
                    <button className="mt-auto bg-slate-800 text-white h-8 w-40 place-self-center">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
