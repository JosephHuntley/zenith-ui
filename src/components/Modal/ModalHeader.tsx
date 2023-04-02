import React, { ReactNode } from "react"
import { Header } from "./ModalStyles"

export type props = {
  children: ReactNode
  font?: { size?: string; color?: string }
}

const ModalHeader = ({ children, font }: props) => {
  return <Header font={font}>{children}</Header>
}

export default ModalHeader
