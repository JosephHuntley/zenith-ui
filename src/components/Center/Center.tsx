import React, { useContext } from "react"
import { Inner } from "./CenterStyles"
import { ZenithContext } from "../../utils"
import Container, { ContainerProps } from "../Container/Container"

export type CenterProps = ContainerProps & {}

const Center = (props: CenterProps) => {
  const { children } = props
  const zenith = useContext(ZenithContext)
  return (
    <Container size={{ width: "100%", height: "100%" }} {...props}>
      <Inner>{children}</Inner>
    </Container>
  )
}

export default Center
