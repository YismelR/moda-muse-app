import CartButton from "./CartButton";
import ProductButton from "./ProductButton";
export default function NavButtons(){
    return(
     <div className="flex gap-2">
        <CartButton />
        <ProductButton />
      </div>
    )
}