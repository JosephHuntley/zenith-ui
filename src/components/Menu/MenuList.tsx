import React, { useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { MenuContext } from "./Menu"
import { List } from "./MenuStyles"

export type MenuListProps = ZenithProps & {}

const MenuList = (props: MenuListProps) => {
  const Context = useContext(MenuContext)
  const zenith = useContext(ZenithContext)
  return Context.isOpen ? <List zenith={zenith}>{props.children}</List> : null
}

export default MenuList
