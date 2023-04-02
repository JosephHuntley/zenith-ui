import React, { useContext } from "react"
import { ZenithContext, ZenithProps } from "../../utils"
import { BadgeMain } from "./BadgeStyles"

export type BadgeProps = ZenithProps & {
  variant?: "default" | "outline" | "hover" | "hover-outline" | "elevated"
  radius?: string
  status: "success" | "failure" | "default" | "new"
}

const Badge = (props: BadgeProps) => {
  const zenith = useContext(ZenithContext)
  const { children } = props
  return (
    <BadgeMain zenith={zenith} {...props}>
      {children}
    </BadgeMain>
  )
}

export default Badge
