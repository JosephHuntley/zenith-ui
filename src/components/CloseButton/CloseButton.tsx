import { ZenithContext, ZenithContextType } from "../../utils"
import React, { useContext } from "react"
import styled from "styled-components"

export type props = {
  size?: string
  variant?: "lg" | "md" | "sm" | string
  color?: string
  onClick?: () => any
}

const ClsButton = styled.span<props & { zenith: ZenithContextType }>`
  color: ${(props) => props.color || props.zenith.colors.white};
  font-weight: bold;
  font-size: ${(props) => props.size || "2rem"};
  line-height: ${(props) => props.size || "2rem"};
  cursor: pointer;
  transition: 0.3s;
`

const CloseButton = ({ size, color, onClick }: props) => {
  const zenith = useContext(ZenithContext)

  switch (size) {
    case "lg":
      size = "5rem"
      break
    case "md":
      size = "2.5rem"
      break
    case "sm":
      size = "1rem"
      break
  }
  return (
    <ClsButton zenith={zenith} color={color} size={size} onClick={onClick}>
      X
    </ClsButton>
  )
}

export default CloseButton
