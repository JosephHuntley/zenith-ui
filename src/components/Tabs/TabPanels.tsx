import React, { useContext } from "react"
import { ZenithProps } from "../../utils"

export type PanelsProps = ZenithProps & {
  index?: number
}

const TabPanels = (props: PanelsProps) => {
  return (
    <div>
      {React.Children.toArray(props.children).map((child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          index: index,
        })
      })}
    </div>
  )
}

export default TabPanels
