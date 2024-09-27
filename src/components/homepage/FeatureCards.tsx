import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import women from "@/assets/women.svg";
import men from "@/assets/men.svg";
import kids from "@/assets/kids.svg";
import shoes from "@/assets/shoes.svg";
import accessories from "@/assets/accessories.svg";
import handbags from "@/assets/handbags.svg";


const cardCategories = [
  {
    title: "Women",
    src: women,
    alt: "women",
  },
  {
    title: "Men",
    src: men,
    alt: "men",
  },
  {
    title: "Kids",
    src: kids,
    alt: "kids",
  },
  {
    title: "Shoes",
    src: shoes,
    alt: "shoes",
  },
  {
    title: "Accessories",
    src: accessories,
    alt: "accessories",
  },
  {
    title: "Handbags",
    src: handbags,
    alt: "handbags",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {cardCategories.map((category, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle className="text-xl">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <img src={category.src} alt={category.alt} className="w-full rounded-b-xl" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
