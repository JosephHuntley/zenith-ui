import { ZenithContext } from "../../utils"
import React, { useContext } from "react"
import { CenterProps } from "./Center"
import { OuterSquare, Inner } from "./CenterStyles"

export type SquareProps = CenterProps & {
  fullSize: string
}

const CenterSquare = (props: SquareProps) => {
  const { children } = props
  const zenith = useContext(ZenithContext)
  return (
    <OuterSquare zenith={zenith} {...props}>
      <Inner>{children}</Inner>
    </OuterSquare>
  )
}

export default CenterSquare
