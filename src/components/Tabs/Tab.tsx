import React, { useContext } from "react"
import { TabsContext } from "./Tabs"
import { ZenithContext, ZenithProps } from "../../utils"
import { ListItem } from "./TabsStyles"

export type SingleTabProps = ZenithProps & {
  index?: number
  secondaryColor?: string
}

const Tab = (props: SingleTabProps) => {
  const { setIsOpen, isOpen } = useContext(TabsContext)
  const zenith = useContext(ZenithContext)
  const active = isOpen === props.index

  return (
    <ListItem
      zenith={zenith}
      active={active}
      onClick={() => setIsOpen(props.index)}
    >
      {props.children}
    </ListItem>
  )
}

export default Tab
