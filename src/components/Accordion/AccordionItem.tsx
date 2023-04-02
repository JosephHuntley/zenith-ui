import React, { useContext, useEffect } from "react"
import { Item } from "./AccordionStyles"
import { dividerType } from "../Divider"
import { ZenithContext, ZenithProps } from "../../utils"

export type ItemProps = ZenithProps & {
  divider?: dividerType
  index?: number
}

const AccordionItem = (props: ItemProps) => {
  const zenith = useContext(ZenithContext)

  return (
    <Item {...props} zenith={zenith}>
      {React.Children.toArray(props.children).map((child) => {
        return React.cloneElement(child as React.ReactElement, {
          index: props.index,
        })
      })}
    </Item>
  )
}

export default AccordionItem
