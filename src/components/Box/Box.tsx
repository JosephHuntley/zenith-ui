import React, { useContext } from "react"
import { Main } from "./BoxStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { Center } from "../Center"

export type BoxProps = ZenithProps & {
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
  position?: {
    position: "absolute" | "relative" | "sticky" | "fixed"
    top?: string
    bottom?: string
    left?: string
    right?: string
    z?: string
  }
}

const Box = (props: BoxProps) => {
  const zenith = useContext(ZenithContext)
  const { center, children } = props
  return (
    <Main zenith={zenith} {...props}>
      {center ? <Center>{children}</Center> : <> {children}</>}
    </Main>
  )
}

export default Box
