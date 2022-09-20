import { CoffeCardRelative, CoffeeAddCart, CoffeeCard, CoffeeCardFooter, CoffeeCardSubtitle, CoffeeCardTag, CoffeeCardTitle, CoffeeCheckoutInfo, CoffeePrice, CoffeeQuantity, CoffeTagContainer } from "./styles";
import cafe from '../../../assets/coffees/Image-10.png'
import { Minus, Plus, ShoppingCart, Target } from "phosphor-react";
import { ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { CartContext } from "../../../App";
import { Actions } from '../../../cart/CartReducer'
import { toast } from "react-toastify";
import { avaibleCoffees } from "../../../data/coffes";

interface Coffee {
    id?: string,
    name?: string,
    tags?: string[],
    description?: string,
    price?: number,
    image?: string
}

interface CoffeeCard extends Coffee {
    children?: ReactNode
}
interface CoffeeCart {
    id?: string,
    quantity?: number
}
export function CoffeeItem({ id, name, image, tags, description, children, price }: CoffeeCard) {
    const { state, dispatch } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)
    const coffeeDescription = description || children
    function incrementCoffeeQuantity() {
        if (quantity == 10) return
        return setQuantity(quantity + 1)
    }
    function decrementCoffeeQuantity() {
        if (quantity == 1) return
        return setQuantity(quantity - 1)
    }
    function addCoffeeToCart() {
        const targetCoffee = avaibleCoffees.find(coffee => coffee.id == id)
        // toast(`x${quantity} ${<strong>targetCoffee?.name</strong>} adicionados ao carrinho.`)
        toast(<>x{quantity} <strong>{targetCoffee?.name}</strong> adicionado{quantity > 1 ? 's' : ''} ao carrinho.</>)
        dispatch({
            type: Actions.ADD_ITEM,
            payload: {
                id,
                quantity
            }
        })


    }
    return (
        <CoffeeCard>
            <CoffeCardRelative>
                <img src={`/src/assets/coffees/${image}`} />
                <CoffeTagContainer>
                    {tags?.map(tag => {
                        return <CoffeeCardTag>{tag}</CoffeeCardTag>
                    })}
                </CoffeTagContainer>
                <div>
                    <CoffeeCardTitle>{name}</CoffeeCardTitle>
                    <CoffeeCardSubtitle>{coffeeDescription}</CoffeeCardSubtitle>
                </div>
            </CoffeCardRelative>
            <CoffeeCardFooter>
                <CoffeePrice>{price?.toFixed(2).replace('.', ',')}</CoffeePrice>
                <CoffeeCheckoutInfo>

                    <CoffeeQuantity>
                        <div onClick={decrementCoffeeQuantity} >

                            <Minus weight="bold" color="var(--purple)" />
                        </div>
                        <span>{quantity}</span>
                        <div onClick={incrementCoffeeQuantity} >
                            <Plus weight="bold" color="var(--purple)" />
                        </div>
                    </CoffeeQuantity>
                    <CoffeeAddCart onClick={addCoffeeToCart}>
                        <ShoppingCart size={20} weight="fill" color="white" />
                    </CoffeeAddCart>
                </CoffeeCheckoutInfo>
            </CoffeeCardFooter>
        </CoffeeCard>
    )
}