import React, { useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { Item } from "./MenuStyles"

export type MenuItemProps = ZenithProps & {}

const MenuItem = (props: MenuItemProps) => {
  const zenith = useContext(ZenithContext)
  return <Item zenith={zenith}>{props.children}</Item>
}

export default MenuItem
