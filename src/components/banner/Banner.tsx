import { ClockAfternoon, CodesandboxLogo, Cube, ShoppingCart } from "phosphor-react";
import { QualityItem } from "./components/QualityItem";
import { BannerContainer, BannerFirstContainer, BannerQualityContainer, BannerSecondContainer, BannerSubTitle, BannerTitleContainer, BlurredBanner } from "./styles";
import coffeImage from '../../assets/banner.png'
import { RandomForm1 } from "./components/RandomForm1";
import { RandomForm2 } from "./components/RandomForm2";

export function Banner() {
    return (
        <BannerContainer>
            <BlurredBanner>

                <RandomForm1 />
                <RandomForm2 />
            </BlurredBanner>
            <BannerFirstContainer>
                <BannerTitleContainer>
                    Encontre o café perfeito para qualquer hora do dia
                </BannerTitleContainer>

                <BannerSubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</BannerSubTitle>
                <img src={coffeImage} />

                <BannerQualityContainer>
                    <QualityItem icon={<ShoppingCart size={16} weight="fill" />} color="var(--yellow-dark)">
                        Compra simples e segura
                    </QualityItem>
                    <QualityItem icon={<CodesandboxLogo size={16} weight="fill" />} color="var(--base-text)">
                        Embalagem mantém o café intacto
                    </QualityItem>
                    <QualityItem icon={<ClockAfternoon size={16} weight="fill" />} color="var(--yellow)">
                        Entrega rápida e rastreada
                    </QualityItem>
                    <QualityItem icon={<Cube size={16} weight="fill" />} color="var(--purple)">
                        O café chega fresquinho até você
                    </QualityItem>
                </BannerQualityContainer>
            </BannerFirstContainer>
            <BannerSecondContainer>

                <img src={coffeImage} />
            </BannerSecondContainer>
        </BannerContainer>
    )
}