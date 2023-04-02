import React, { useContext } from "react"
import { Main } from "./ButtonStyles"
import { ZenithProps, DisabledType } from "../../utils"
import { ZenithContext } from "../../utils"

export type ButtonProps = ZenithProps & {
  onClick?: () => any
  variant?: "outline" | "elevated" | "default" | "hover"
  Disabled?: DisabledType // 'disabled' is an html property. Therefore, property must be 'Disabled'
}

const Button = (props: ButtonProps) => {
  const zenith = useContext(ZenithContext)
  return (
    <Main zenith={zenith} disabled={props.Disabled?.isDisabled} {...props}>
      {props.children}
    </Main>
  )
}

export default Button
