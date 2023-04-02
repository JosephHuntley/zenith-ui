import React, { useContext } from "react"
import { Panel } from "./AccordionStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { AccordionContext } from "./Accordion"

export type PanelProps = ZenithProps & {
  index?: number
}

const AccordionPanel = (props: PanelProps) => {
  const Context = useContext(AccordionContext)
  const zenith = useContext(ZenithContext)
  const isOpen = Context.panelNum == props.index

  return isOpen ? <Panel zenith={zenith}>{props.children}</Panel> : <></>
}

export default AccordionPanel
