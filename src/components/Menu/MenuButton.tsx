import React, { useContext } from "react"
import { Button } from "./MenuStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { MenuContext } from "./Menu"

export type MenuButtonProps = ZenithProps & {}

const MenuButton = (props: MenuButtonProps) => {
  const Context = useContext(MenuContext)
  const zenith = useContext(ZenithContext)
  return (
    <Button
      zenith={zenith}
      onClick={() => Context.setIsOpen((prevState: boolean) => !prevState)}
    >
      {props.children}
    </Button>
  )
}

export default MenuButton
