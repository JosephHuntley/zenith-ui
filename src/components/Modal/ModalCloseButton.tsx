import React from "react"
import { Close } from "./ModalStyles"
import { CloseButton } from "../CloseButton"
import { props } from "../CloseButton/CloseButton"
const ModalCloseButton = ({ size, color, onClick }: props) => {
  return (
    <Close onClick={onClick}>
      <CloseButton color={color} size={size} />
    </Close>
  )
}

export default ModalCloseButton
