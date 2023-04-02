import React, { ReactNode, useContext } from "react"
import { Inner, SkeletonDiv } from "./SkeletonStyles"
import { ZenithContext, ZenithProps } from "../../utils"

export type SkeletonProps = ZenithProps & {
  isLoaded: boolean
  colorScheme?: { start?: string; middle?: string; end?: string }
  speed?: string
}

const Skeleton = (props: SkeletonProps) => {
  const { isLoaded, children } = props
  const zenith = useContext(ZenithContext)
  return isLoaded ? (
    <>{children}</>
  ) : (
    <SkeletonDiv zenith={zenith} {...props}>
      <Inner>{children}</Inner>
    </SkeletonDiv>
  )
}

export { Skeleton }
