import React, { useContext } from "react"
import { Main } from "./ContainerStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { Center } from "../Center"

export type ContainerProps = ZenithProps & {
  center?: boolean
  flex?: {
    direction?: "row" | "column"
    gap?: string
    justify?:
      | "space-around"
      | "space-between"
      | "center"
      | "flex-start"
      | "flex-end"
  }
  grid?: {
    colTemplate?: string
    rowTemplate?: string
    gap?: string
  }
}

const Container = (props: ContainerProps) => {
  const zenith = useContext(ZenithContext)
  const { center, children } = props
  return (
    <Main zenith={zenith} {...props}>
      {center ? <Center>{children}</Center> : <> {children}</>}
    </Main>
  )
}

export default Container
