import { ZenithProps } from "../../utils"
import React from "react"

export type CarouselProps = ZenithProps & {}

const CarouselItem = (props: CarouselProps) => {
  const { children } = props
  return <div>{children}</div>
}

export default CarouselItem
