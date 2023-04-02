import React, { useState, useContext } from "react"
import {
  Div,
  ArrowUp,
  ToolTipMain,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "./ToolTipStyles"
import { ZenithContext, ZenithProps } from "../../utils"

export type ToolTipProps = ZenithProps & {
  value: string // Button Message
  arrow?: { arrowSize?: string }
  position?: "left" | "top" | "right" | "bottom"
}

const ToolTip = (props: ToolTipProps) => {
  const zenith = useContext(ZenithContext)
  const [showMessage, setShowMessage] = useState(false)
  let arrowComponent
  switch (props.position) {
    case "left":
      arrowComponent = (
        <ArrowRight
          zenith={zenith}
          position={props.position}
          arrow={props.arrow}
          value={props.value}
        />
      )
      break
    case "right":
      arrowComponent = (
        <ArrowLeft
          zenith={zenith}
          position={props.position}
          arrow={props.arrow}
          value={props.value}
        />
      )
      break
    case "top":
      arrowComponent = (
        <ArrowDown
          zenith={zenith}
          position={props.position}
          arrow={props.arrow}
          value={props.value}
        />
      )
      break
    case "bottom":
      arrowComponent = (
        <ArrowDown
          zenith={zenith}
          position={props.position}
          arrow={props.arrow}
          value={props.value}
        />
      )
      break
    default:
      break
  }

  return (
    <Div
      onMouseEnter={() => {
        setShowMessage(true)
      }}
      onMouseLeave={() => {
        setShowMessage(false)
      }}
    >
      {props.value}
      {showMessage ? (
        <>
          {props.arrow && arrowComponent}
          <ToolTipMain zenith={zenith} {...props}>
            {props.children}
          </ToolTipMain>
        </>
      ) : (
        <></>
      )}
    </Div>
  )
}

export default ToolTip
