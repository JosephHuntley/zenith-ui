import React, { Children, ReactNode } from "react"
import { Body } from "./ModalStyles"

export type props = {
  children: ReactNode
  center?: boolean
}

const ModalBody = ({ children, center }: props) => {
  return <Body center={center}>{children}</Body>
}

export default ModalBody
