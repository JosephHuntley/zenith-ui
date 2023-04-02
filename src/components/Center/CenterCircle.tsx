import { ZenithContext } from "../../utils"
import React, { useContext } from "react"
import { CenterProps } from "./Center"
import { OuterCircle, Inner } from "./CenterStyles"

export type CircleProps = CenterProps & {
  fullSize: string
}

const CenterCircle = (props: CircleProps) => {
  const { children } = props
  const zenith = useContext(ZenithContext)
  return (
    <OuterCircle zenith={zenith} {...props}>
      <Inner>{children}</Inner>
    </OuterCircle>
  )
}

export default CenterCircle
