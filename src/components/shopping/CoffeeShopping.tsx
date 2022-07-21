import { useContext } from "react";
import { CartContext } from "../../App";
import { avaibleCoffees } from "../../data/coffes";
import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeBuyContainer, CoffeeShoppingBody, CoffeeShoppingTitle } from "./styles";

export function CoffeeShopping() {
    return (
        <CoffeeShoppingBody>
            <CoffeeShoppingTitle>Nossos cafés</CoffeeShoppingTitle>
            <CoffeeBuyContainer>
                {avaibleCoffees.map((coffee, index) => {
                    return (
                        <CoffeeItem image={coffee.image == "" ? `Image-${index}.png` : coffee.image} id={coffee.id} name={coffee.name} price={coffee.price} tags={coffee.tags}>
                            {coffee.description}
                        </CoffeeItem>

                    )
                })}
            </CoffeeBuyContainer>
        </CoffeeShoppingBody>
    )
}