import React, { ReactNode, useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { PortalContainer } from "./PortalStyles"

type props = {
  children: ReactNode
  zIndex?: string
}

const Portal = ({ children, zIndex }: props) => {
  // Makes it compatible with Nextjs since during build time their is no document
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return loading ? (
    <></>
  ) : (
    ReactDOM.createPortal(
      <PortalContainer zIndex={zIndex}>{children}</PortalContainer>,
      document.body,
    )
  )
}

export default Portal
