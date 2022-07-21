import { Bank, CreditCard, Minus, Money, Plus } from "phosphor-react"
import { createContext, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext, OrderInfo } from "../../App"
import { CoffeeQuantity } from "../../components/shopping/components/styles"
import { avaibleCoffees } from "../../data/coffes"
import { CoffeeCheckoutItem } from "./components/CoffeeCheckoutItem"
import { CheckoutDetailsContainer } from "./components/styles"
import { CheckoutCartItemsContainer, CheckoutConfirmButton, CheckoutContainer, CheckoutForm, CheckoutGrid, CheckoutItems, CheckoutLocationAndPaymentContainer, CheckoutLocationContainer, CheckoutLocationInput, CheckoutLocationTitleSection, CheckoutPaymentButton, CheckoutPaymentContainer, CheckoutPaymentInfoTitle, CheckoutPriceDetails, CheckoutTitle } from "./styles"




export function Checkout() {
    const { state } = useContext(CartContext)
    const [paymentMethod, setPaymentMethod] = useState("")
    const { orderInfo, setOrderInfo } = useContext(OrderInfo)
    function handleSelectPaymentMethod(method: string) {
        setOrderInfo({ ...orderInfo, paymentMethod: method })
        return setPaymentMethod(method)
    }
    function checkPaymentMethod(method: string) {
        return method == paymentMethod
    }
    const subTotal = state.length ? state?.map(e => {
        return (avaibleCoffees.find(avaible => avaible.id == e.id)?.price! * e.quantity!)
    }).reduce((prev, curr) => prev + curr) : 0;
    const delivery = 3.00;
    const total = subTotal + delivery;
    return (
        <CheckoutContainer>
            <CheckoutLocationAndPaymentContainer>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>
                <CheckoutLocationContainer>
                    <CheckoutLocationTitleSection>
                        <h3>Endereço de Entrega</h3>
                        <h5>Informe o endereço de entrega onde deseja receber o seu pedido</h5>
                    </CheckoutLocationTitleSection>
                    <CheckoutForm>
                        <CheckoutGrid customTemplate="12.5rem" gap={"1rem"}>

                            <CheckoutLocationInput placeholder="CEP" onChange={(e) => setOrderInfo({
                                ...orderInfo,
                                cep: e.target.value
                            })} />

                        </CheckoutGrid>
                        <CheckoutLocationInput placeholder="Rua" onChange={(e) => setOrderInfo({
                            ...orderInfo,
                            rua: e.target.value
                        })} />
                        <CheckoutGrid customTemplate="12.5rem 1fr" gap={"1rem"}>

                            <CheckoutLocationInput placeholder="Número" onChange={(e) => setOrderInfo({
                                ...orderInfo,
                                numero: e.target.value
                            })} />
                            <CheckoutLocationInput placeholder="Complemento" />
                        </CheckoutGrid>
                        <CheckoutGrid customTemplate="12.5rem 1fr 3.75rem" gap={"1rem"}>
                            <CheckoutLocationInput placeholder="Bairro" onChange={(e) => setOrderInfo({
                                ...orderInfo,
                                bairro: e.target.value
                            })} />
                            <CheckoutLocationInput placeholder="Cidade" onChange={(e) => setOrderInfo({
                                ...orderInfo,
                                cidade: e.target.value
                            })} />
                            <CheckoutLocationInput placeholder="UF" onChange={(e) => setOrderInfo({
                                ...orderInfo,
                                uf: e.target.value
                            })} />
                        </CheckoutGrid>
                    </CheckoutForm>
                </CheckoutLocationContainer>
                <CheckoutPaymentContainer>
                    <CheckoutPaymentInfoTitle>
                        <h5>Pagamento</h5>
                        <h6>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h6>
                    </CheckoutPaymentInfoTitle>
                    <CheckoutGrid customTemplate="1fr 1fr 1fr" gap={"1rem"} forceLayout>
                        <CheckoutPaymentButton selected={checkPaymentMethod("CREDIT_CARD")} onClick={() => handleSelectPaymentMethod("CREDIT_CARD")}>
                            <div>
                                <CreditCard />
                            </div>
                            Cartão de Crédito
                        </CheckoutPaymentButton>
                        <CheckoutPaymentButton selected={checkPaymentMethod("DEBIT_CARD")} onClick={() => handleSelectPaymentMethod("DEBIT_CARD")}>
                            <div>
                                <Bank />
                            </div>
                            Cartão de Débito
                        </CheckoutPaymentButton>
                        <CheckoutPaymentButton selected={checkPaymentMethod("MONEY")} onClick={() => handleSelectPaymentMethod("MONEY")} >
                            <div>
                                <Money />
                            </div>
                            Dinheiro
                        </CheckoutPaymentButton>
                    </CheckoutGrid>

                </CheckoutPaymentContainer>
            </CheckoutLocationAndPaymentContainer>
            <CheckoutCartItemsContainer>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>
                <CheckoutItems>
                    {state.length && state?.map(coffee => {
                        return <CoffeeCheckoutItem id={coffee.id!} quantity={coffee.quantity!} />
                    })}
                    <CheckoutPriceDetails>
                        <div>
                            <h4>Total de itens</h4>
                            <h3>R${subTotal.toFixed(2).replace('.', ',')}</h3>
                        </div>
                        <div>
                            <h4>Entrega</h4>
                            <h3>R${delivery.toFixed(2).replace('.', ',')}</h3>
                        </div>
                        <div>
                            <h2>Total</h2>
                            <h2>R${total.toFixed(2).replace('.', ',')}</h2>
                        </div>
                    </CheckoutPriceDetails>
                    <NavLink to={"/confirmed"}>
                        <CheckoutConfirmButton>Confirmar pedido</CheckoutConfirmButton>
                    </NavLink>
                </CheckoutItems>
            </CheckoutCartItemsContainer>
        </CheckoutContainer >
    )
}