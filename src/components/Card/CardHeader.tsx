import React, { ReactNode, useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { Header } from "./CardStyles"
import { Divider, dividerType } from "../Divider"

export type HeaderProps = ZenithProps & {
  divider?: dividerType
}

const CardHeader = (props: HeaderProps) => {
  const { children, divider } = props
  const zenith = useContext(ZenithContext)
  return (
    <Header zenith={zenith}>
      {children}
      {props.divider ? (
        <Divider
          color={divider?.color || "white"}
          variant={divider?.variant}
          size={{ width: divider?.width, height: divider?.thickness || "1px" }}
        />
      ) : (
        <></>
      )}
    </Header>
  )
}

export default CardHeader
