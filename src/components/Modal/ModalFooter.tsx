import React, { ReactNode } from "react"
import { Footer } from "./ModalStyles"

export type props = {
  children: ReactNode
  font?: { size?: string; color?: string }
}

const ModalFooter = ({ children, font }: props) => {
  return <Footer font={font}>{children}</Footer>
}

export default ModalFooter
