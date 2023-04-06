import React, { useContext } from "react"
import { Main } from "./ContainerStyles"
import { ZenithContext, ZenithProps } from "../../utils"
import { Center } from "../Center"

export type ContainerProps = ZenithProps & {
  center?: boolean
  overflow?: "scroll" | "hidden"
}

const Container = (props: ContainerProps) => {
  const zenith = useContext(ZenithContext)
  const { center, children } = props
  return (
    <Main zenith={zenith} {...props}>
      {children}
    </Main>
  )
}

export default Container
