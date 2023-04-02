import React, { createContext, useContext, useState } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { MenuMain } from "./MenuStyles"

export type MenuProps = ZenithProps & {}

type ContextProps = {
  isOpen?: boolean
  setIsOpen: Function
}

export const MenuContext = createContext<ContextProps>({
  setIsOpen: () => {},
})

const Menu = (props: MenuProps) => {
  const zenith = useContext(ZenithContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      <MenuMain zenith={zenith}>{props.children}</MenuMain>
    </MenuContext.Provider>
  )
}

export default Menu
