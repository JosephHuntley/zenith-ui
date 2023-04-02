import React, { useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { List } from "./TabsStyles"

export type ListProps = ZenithProps & {
  gap?: string
}

const TabsList = (props: ListProps) => {
  const zenith = useContext(ZenithContext)
  return (
    <List zenith={zenith}>
      {React.Children.toArray(props.children).map((child, index) => {
        return React.cloneElement(child as React.ReactElement, {
          index: index,
        })
      })}
    </List>
  )
}

export default TabsList
