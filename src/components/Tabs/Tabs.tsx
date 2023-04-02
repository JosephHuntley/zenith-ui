import React, { createContext, useContext, useState } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { Main } from "./TabsStyles"

export type TabsProps = ZenithProps & {}

type TabsContextType = {
  isOpen?: number
  setIsOpen: Function
  noOfTabs?: number
}

export const TabsContext = createContext<TabsContextType>({
  setIsOpen: () => {},
  isOpen: -1,
})

const Tabs = (props: TabsProps) => {
  const zenith = useContext(ZenithContext)
  const [isOpen, setIsOpen] = useState(0)
  return (
    <TabsContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      <Main zenith={zenith} {...props}>
        {props.children}
      </Main>
    </TabsContext.Provider>
  )
}

export default Tabs
