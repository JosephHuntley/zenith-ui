import React, { useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { DrawerMain } from "./DrawerStyles"

export type DrawerProps = ZenithProps & {
  isOpen: boolean
  position?: "left" | "right"
  top?: string
}

const Drawer = (props: DrawerProps) => {
  const zenith = useContext(ZenithContext)
  return props.isOpen ? (
    <DrawerMain zenith={zenith} {...props}>
      {props.children}
    </DrawerMain>
  ) : (
    <></>
  )
}

export default Drawer
