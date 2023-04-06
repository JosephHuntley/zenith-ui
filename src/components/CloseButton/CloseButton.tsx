import {
  ZenithContext,
  ZenithContextType,
  ZenithProps,
  style,
} from "../../utils"
import React, { useContext } from "react"
import styled from "styled-components"

export type CloseProps = ZenithProps & {}

const ClsButton = styled.span<CloseProps & { zenith: ZenithContextType }>`
  ${style}
  color: ${(props) => props.font?.color || props.zenith.colors.white};
  background-color: ${(props) => props.color || "transparent"};
  font-size: ${(props) => props.size?.width || "2rem"};

  cursor: pointer;
  transition: 0.3s;
`

const CloseButton = (props: CloseProps) => {
  const zenith = useContext(ZenithContext)
  return (
    <ClsButton zenith={zenith} {...props}>
      X
    </ClsButton>
  )
}

export default CloseButton
