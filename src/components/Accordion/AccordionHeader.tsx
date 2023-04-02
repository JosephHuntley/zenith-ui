import React, { useContext } from "react"
import { Header, UpArrow, DownArrow } from "./AccordionStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { AccordionContext } from "./Accordion"
import { Divider, dividerType } from "../Divider"

export type HeaderProps = ZenithProps & {
  index?: number
  divider?: dividerType
  icon?: {
    color?: string
    size?: string
  }
}

const AccordionHeader = (props: HeaderProps) => {
  const Context = useContext(AccordionContext)
  const zenith = useContext(ZenithContext)

  const isOpen = props.index === Context.panelNum
  const handleClick = () => {
    if (isOpen) {
      Context.setPanelNum(-1)
    } else {
      Context.setPanelNum(props.index)
    }
  }

  return (
    <>
      <Divider
        size={{
          height: props.divider?.thickness || "1px",
          width: props.divider?.width,
        }}
        color={props.divider?.color || "white"}
      />
      <Header {...props} zenith={zenith} onClick={() => handleClick()}>
        {props.children}
        {isOpen ? <DownArrow zenith={zenith} /> : <UpArrow zenith={zenith} />}
      </Header>
    </>
  )
}

export default AccordionHeader
