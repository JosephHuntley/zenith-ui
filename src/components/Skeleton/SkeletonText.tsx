import React, { ReactNode, useContext } from "react"
import { Text } from "./SkeletonStyles"
import { Skeleton } from "./"
import { ZenithContext, ZenithProps } from "../../utils"
import { SkeletonProps } from "./Skeleton"

export type TextProps = SkeletonProps & {
  numOfLines: number
}

const SkeletonText = (props: TextProps) => {
  const { numOfLines, isLoaded, children, colorScheme } = props
  const zenith = useContext(ZenithContext)
  const rows = []
  for (let i = 0; i < numOfLines; i++) {
    rows.push(
      <Skeleton key={i} isLoaded={isLoaded} colorScheme={colorScheme}>
        <Text zenith={zenith} {...props}>
          {children}
        </Text>
      </Skeleton>,
    )
  }

  return isLoaded ? <>{children}</> : <>{rows}</>
}

export { SkeletonText }
