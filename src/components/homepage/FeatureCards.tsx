import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import women from "@/assets/women.svg"
import men from "@/assets/men.svg"


const cardCategories= [{
  title: "Women",
  src: women,
  alt: "women"
},
{
  title:"Men",
  src:men,
  alt: "men"
},
]

export default function FeatureCards(){
    return (
      <div>
{cardCategories.map((category, idx) => (

  <Card key={idx}>
  <CardHeader>
    <CardTitle>{category.title}</CardTitle>
  </CardHeader>
  <CardContent>
    <img src={category.src} alt={category.alt}/>
  </CardContent>
</Card>
    ))}
      </div>
)
}