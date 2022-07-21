import { ConfirmedContainer, ConfirmedIcons, ConfirmedInfoContainer, ConfirmedItemDetail, ConfirmedOrderDetails } from "./styles";
import Illustration from '../../assets/Illustration.png'
import { Clock, MapPin, Money, ShoppingCart, Watch } from "phosphor-react";
import { useContext } from "react";
import { OrderInfo } from "../../App";
import { Actions } from "../../cart/CartReducer";

export function Confirmed() {
    const { orderInfo } = useContext(OrderInfo)
    console.log('orderInfo', orderInfo)
    function paymentMethod() {
        if (orderInfo.paymentMethod == "DEBIT_CARD") {
            return "Cartão de Débito"
        }
        if (orderInfo.paymentMethod == "CREDIT_CARD") {
            return "Cartão de Crédito"
        }
        if (orderInfo.paymentMethod == "MONEY") {
            return "Dinheiro"
        }
    }
    return (
        <ConfirmedContainer>
            <ConfirmedInfoContainer>
                <div>
                    <h1>Uhu! Pedido Confirmado</h1>
                    <h4>Agora é só aguardar que logo o café chegará até você</h4>
                </div>
                <ConfirmedOrderDetails>
                    <div>
                        <ConfirmedItemDetail backgroundColor="var(--purple)">
                            <MapPin weight="fill" color="white" />

                            <div>{orderInfo.rua}, {orderInfo.numero}<strong><br />{orderInfo.bairro} - {orderInfo.cidade}, {orderInfo.uf}</strong></div>
                        </ConfirmedItemDetail>
                    </div>

                    <div>
                        <ConfirmedItemDetail backgroundColor="var(--yellow)">
                            <Clock weight="fill" color="white" />

                            <div>Previsão de entrega<strong><br />20 min - 30 min</strong></div>
                        </ConfirmedItemDetail>
                    </div>

                    <div>
                        <ConfirmedItemDetail backgroundColor="var(--yellow-dark)">
                            <Money weight="fill" color="white" />

                            <div>Pagamento na entrega<strong><br />{paymentMethod()}</strong></div>
                        </ConfirmedItemDetail>
                    </div>
                </ConfirmedOrderDetails>
            </ConfirmedInfoContainer>
            <img src={Illustration} />
        </ConfirmedContainer>
    )
}