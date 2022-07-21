import { Minus, Plus, Trash } from "phosphor-react";
import { CheckoutItemController, CoffeeQuantity, CoffeeRemove } from "../../../components/shopping/components/styles";
import { CheckoutItemContainer, CheckoutDetailsContainer, CheckoutItemDetails, CheckoutItemSubtotal } from "./styles";
import { avaibleCoffees, Coffee } from '../../../data/coffes'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../App";
import { Actions } from "../../../cart/CartReducer";


interface ICheckoutCoffe {
    id: string,
    quantity: number
}

export function CoffeeCheckoutItem({ id, quantity }: ICheckoutCoffe) {
    const coffee = avaibleCoffees.find(c => c.id == id)
    const { dispatch } = useContext(CartContext)

    function priceFormating(price: number) {
        return (price * quantity).toFixed(2).replace('.', ',')
    }
    function handleUpdateQuantity(updateType: "inc" | "dec") {
        if (updateType == "dec" && quantity == 1) return
        return dispatch({
            type: Actions.UPDATE_ITEM,
            payload: {
                id,
                quantity: updateType == "inc" ? quantity + 1 : quantity - 1
            }
        })
    }
    function handleRemoveItem() {
        dispatch({
            type: Actions.REMOVE_ITEM,
            payload: {
                id
            }
        })
    }
    return (
        <CheckoutDetailsContainer>
            <CheckoutItemContainer>
                <div>

                    <img src={`/src/assets/coffees/${coffee?.image}`} alt="" />
                </div>
                <CheckoutItemDetails>
                    <h5>{coffee?.name} </h5>
                    <CheckoutItemController>
                        <CoffeeQuantity>
                            <div onClick={() => handleUpdateQuantity("dec")}>

                                <Minus weight="bold" color="var(--purple)" />
                            </div>
                            <span>{quantity}</span>
                            <div onClick={() => handleUpdateQuantity("inc")}>
                                <Plus weight="bold" color="var(--purple)" />
                            </div>
                        </CoffeeQuantity>
                        <CoffeeRemove onClick={handleRemoveItem}>
                            <div>
                                <Trash />
                            </div>
                            Remover
                        </CoffeeRemove>

                    </CheckoutItemController>
                </CheckoutItemDetails>
                <CheckoutItemSubtotal>
                    R$ {priceFormating(coffee?.price!)}
                </CheckoutItemSubtotal>
            </CheckoutItemContainer>
            <hr style={{ margin: "1rem", opacity: .1 }}></hr>

        </CheckoutDetailsContainer>
    )
}

