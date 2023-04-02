import React from "react"
import { Section } from "./ModalStyles"

type props = {
  onClick: () => any
  isOpen: boolean
}

const ModalBackdrop = ({ onClick, isOpen }: props) => {
  // TODO: Change isOpen to context
  return isOpen ? <Section onClick={onClick} /> : null
}

export default ModalBackdrop
