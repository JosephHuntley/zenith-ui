import React, { useContext } from "react"
import { Inner, Outer } from "./CenterStyles"
import { ZenithContext, ZenithProps } from "../../utils"

export type CenterProps = ZenithProps & {}

const Center = (props: CenterProps) => {
  const { children } = props
  const zenith = useContext(ZenithContext)
  return (
    <Outer zenith={zenith} {...props}>
      <Inner>{children}</Inner>
    </Outer>
  )
}

export default Center
