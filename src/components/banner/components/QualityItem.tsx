import { ShoppingCart } from "phosphor-react"
import { ReactNode } from "react"
import { QualityItemContainer, QualityItemText } from "./styles"

interface IQualityItem {
    icon?: ReactNode,
    children?: string,
    color?: string
}

export function QualityItem({ icon, children, color }: IQualityItem) {
    return (
        <>

            <QualityItemContainer color={color}>
                {icon}
                <QualityItemText>
                    {children}
                </QualityItemText>
            </QualityItemContainer>
        </>
    )
}