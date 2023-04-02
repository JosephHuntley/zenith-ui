import React, { useContext } from "react"
import { ZenithContext, ZenithContextType, ZenithProps } from "../../utils"
import styled from "styled-components"

type BackdropProps = ZenithProps & {
  onClick: () => any
  isOpen: boolean
}

const BackdropMain = styled.div<BackdropProps & { zenith: ZenithContextType }>`
  background-color: ${(props) => props.color || "rgba(0, 0, 0, 0.2)"};
  width: ${(props) => props.size?.width || "100vw"};
  height: ${(props) => props.size?.height || "100%"};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Backdrop = (props: BackdropProps) => {
  const zenith = useContext(ZenithContext)
  return props.isOpen ? (
    <BackdropMain zenith={zenith} {...props} onClick={props.onClick} />
  ) : (
    <></>
  )
}

export default Backdrop
