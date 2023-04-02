import React, { createContext, useState, useContext } from "react"
import { ZenithProps } from "../../utils"
import { Main } from "./AccordionStyles"
import { Divider, dividerType } from "../Divider"
import { ZenithContext } from "../../utils"

export type AccordionProps = ZenithProps & {
  divider?: dividerType
}

export interface AccordionContextValue {
  panelNum?: number
  setPanelNum: Function
}

// The setPanelNum is for the Accordion header so that it can change to AccordionItem's index.
export const AccordionContext = createContext<AccordionContextValue>({
  setPanelNum: () => {},
})

const Accordion = (props: AccordionProps) => {
  const [panelNum, setPanelNum] = useState(-1)
  const zenith = useContext(ZenithContext)

  return (
    <AccordionContext.Provider
      value={{ panelNum: panelNum, setPanelNum: setPanelNum }}
    >
      <Main {...props} zenith={zenith}>
        {React.Children.toArray(props.children).map((child, index) => {
          return React.cloneElement(child as React.ReactElement, {
            index: index,
            divider: props.divider,
          })
        })}

        <Divider
          size={{
            height: props.divider?.thickness || "1px",
            width: props.divider?.width,
          }}
          margin={{ m: "0" }}
          padding={{ p: "0" }}
          color={props.divider?.color || "white"}
        />
      </Main>
    </AccordionContext.Provider>
  )
}

export default Accordion
