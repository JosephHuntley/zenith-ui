import React, { useContext } from "react"
import { Body } from "./CardStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { Center } from "../"

export type BodyProps = ZenithProps & {
  isCentered?: boolean
}
const CardBody = (props: BodyProps) => {
  const { isCentered, children } = props
  const zenith = useContext(ZenithContext)

  return (
    <Body zenith={zenith} {...props}>
      {isCentered ? <Center>{children}</Center> : <>{children}</>}
    </Body>
  )
}

export default CardBody
