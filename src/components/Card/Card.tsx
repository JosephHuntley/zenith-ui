import React, { useContext } from "react"
import { Main } from "./CardStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { dividerType } from "../Divider"

export type CardProps = ZenithProps & {
  size?: "sm" | "md" | "lg" | "responsive" //  150px 300px 500px responsive to content inside
  variant?: "default" | "outline" | "elevated" | "hover"
  divider?: dividerType
}

const Card = (props: CardProps) => {
  const zenith = useContext(ZenithContext)
  const { children, divider } = props
  return (
    <Main zenith={zenith} {...props}>
      {React.Children.toArray(children).map((child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          divider: divider,
        })
      })}
    </Main>
  )
}

export default Card
