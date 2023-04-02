import React, { useContext } from "react"
import { ZenithProps } from "../../utils"
import { TabsContext } from "./Tabs"

export type PanelProps = ZenithProps & {
  index?: number
}

const Panel = (props: PanelProps) => {
  const { isOpen } = useContext(TabsContext)
  return isOpen === props.index ? <div>{props.children}</div> : <></>
}

export default Panel
