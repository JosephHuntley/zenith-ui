import React, { ReactNode, useContext } from "react"
import { Footer } from "./CardStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { Divider, dividerType } from "../Divider"

export type FooterProps = ZenithProps & {
  divider?: dividerType
}

const CardFooter = (props: FooterProps) => {
  const { children, divider } = props
  const zenith = useContext(ZenithContext)
  return (
    <Footer zenith={zenith} {...props}>
      {props.divider ? (
        <Divider
          color={divider?.color || "white"}
          variant={divider?.variant}
          size={{ width: divider?.width, height: divider?.thickness || "1px" }}
        />
      ) : (
        <></>
      )}
      {children}
    </Footer>
  )
}

export default CardFooter
