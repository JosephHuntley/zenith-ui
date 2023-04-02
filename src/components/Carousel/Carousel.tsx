import React, { useContext, useState } from "react"
import { ZenithProps, ZenithContext } from "../../utils"
import {
  Main,
  RightArrow,
  LeftArrow,
  Ellipse,
  Row,
  Col,
} from "./CarouselStyles"

export type CarouselProps = ZenithProps & {
  arrow?: { display: boolean; color?: string; size?: string }
}

const Carousel = (props: CarouselProps) => {
  const { children, arrow = { display: "true" } } = props
  const [isOpen, setIsOpen] = useState(0)
  const zenith = useContext(ZenithContext)
  const items = React.Children.toArray(children)

  const nextItem = () => {
    if (isOpen + 1 === items.length) {
      setIsOpen(0)
    } else {
      setIsOpen((prevState) => prevState + 1)
    }
  }

  const prevItem = () => {
    if (isOpen === 0) {
      setIsOpen(items.length - 1)
    } else {
      setIsOpen((prevState) => prevState - 1)
    }
  }

  return (
    <Main>
      <Row>
        {arrow.display ? (
          <LeftArrow
            zenith={zenith}
            onClick={() => {
              prevItem()
            }}
          />
        ) : (
          <></>
        )}
        {items[isOpen]}{" "}
        {arrow.display ? (
          <RightArrow
            zenith={zenith}
            onClick={() => {
              nextItem()
            }}
          />
        ) : (
          <></>
        )}
      </Row>
      <Row>
        {items.map((children, index) => (
          <Ellipse
            onClick={() => {
              setIsOpen(index)
            }}
            key={index}
            zenith={zenith}
            active={index === isOpen}
          />
        ))}
      </Row>
    </Main>
  )
}

export default Carousel
