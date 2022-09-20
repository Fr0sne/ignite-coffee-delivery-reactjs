import logo from '../../assets/logo.svg'
import { ButtonContainer, CartButton, HeaderContainer, ImageContainer, LocationButton, LocationButtonContent } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CartContext, OrderInfo } from '../../App'

export function Header() {
    const { orderInfo } = useContext(OrderInfo)
    const { state: cartInfo } = useContext(CartContext)
    const [cartNotification, setCartNotification] = useState(0)
    useEffect(() => {
        let total = 0;
        cartInfo.forEach(e => total += e.quantity!)
        setCartNotification(total)
    }, [cartInfo])
    return (
        <HeaderContainer>
            <ImageContainer onClick={() => window.location.href = "/"}>

                <img src={logo} />
            </ImageContainer>
            <ButtonContainer>
                <NavLink to={"/checkout"}>

                    <CartButton>
                        <div>{cartNotification}</div>
                        <ShoppingCart size={16} weight="fill" />
                    </CartButton>
                </NavLink>
                <LocationButton>
                    <LocationButtonContent>
                        <MapPin size={16} weight="fill" />{orderInfo.cidade && orderInfo.uf ? orderInfo.cidade + ", " + orderInfo.uf : "Não selecionado"}
                    </LocationButtonContent>
                </LocationButton>
            </ButtonContainer>
        </HeaderContainer>
    )
}