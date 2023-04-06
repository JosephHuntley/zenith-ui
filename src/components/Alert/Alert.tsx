import React, { useContext } from "react"
import { ZenithProps, ZenithContext } from "../../utils"
import { Main } from "./AlertStyles"

export type AlertProps = ZenithProps & {
  isOpen: boolean
  top?: string
}

const Alert = (props: AlertProps) => {
  const { children, isOpen } = props
  const Zenith = useContext(ZenithContext)
  return isOpen ? (
    <Main zenith={Zenith} {...props}>
      {children}
    </Main>
  ) : (
    <></>
  )
}

export default Alert
