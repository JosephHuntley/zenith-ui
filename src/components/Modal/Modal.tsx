import React, { ReactNode, useContext } from "react"
import { ModalBox } from "./ModalStyles"
import { Center } from "../Center"
import { ZenithContext } from "../../utils"

export type props = {
  children: ReactNode
  size?: { width?: string; height?: string }
  font?: { size: string; color: string }
  color?: string
  variant?: "default" | "elevated" | "outline" | "hover"
  isOpen: boolean
}

const Modal = ({ children, size, font, color, variant, isOpen }: props) => {
  const zenith = useContext(ZenithContext)
  return isOpen ? (
    <Center size={{ width: "100vw", height: "100vh" }}>
      <ModalBox
        zenith={zenith}
        isOpen={isOpen}
        size={size}
        font={font}
        color={color}
        variant={variant}
      >
        {children}
      </ModalBox>
    </Center>
  ) : null
}

export default Modal
