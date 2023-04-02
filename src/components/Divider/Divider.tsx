import React, { useContext } from "react"
import { CenterHorizontal, DividerLineHorizontal } from "./DividerStyles"
import { ZenithContext, ZenithProps } from "../../utils"

export type dividerProps = ZenithProps & {
  orientation?: "vertical" | "horizontal"
  opacity?: string
  variant?: "solid" | "dashed" | "dotted" | "none" | string
  thickness?: string
}

export type dividerType = {
  color?: string
  width?: string
  thickness?: string
  variant?: "solid" | "dashed" | "dotted" | "none" | string
  opacity?: string
}

const Divider = (
  props: dividerProps,
  { orientation = "horizontal", margin = { m: "1px" }, size }: dividerProps,
) => {
  const zenith = useContext(ZenithContext)
  return (
    <CenterHorizontal zenith={zenith} {...props} size={size}>
      <DividerLineHorizontal
        zenith={zenith}
        {...props}
        margin={margin}
        orientation={orientation}
      />
    </CenterHorizontal>
  )
}

export default Divider
