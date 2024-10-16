import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useItems } from '@/hooks/useItems';
import StarRating from './StarRating';

export default function Items() {
  const { items, error } = useItems();

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {items.map((item) => (
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
      ))}
    </>
  );
}
