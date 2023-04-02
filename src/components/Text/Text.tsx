import React, { ReactNode, useContext } from "react"
import { H1, H2, H3, H4, H5, H6, P } from "./TextStyles"
import { ZenithContext, ZenithProps } from "../../utils"

export type TextProps = ZenithProps & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  align?: "start" | "center" | "end"
}

const Text = (props: TextProps) => {
  let { variant, font, children } = props
  const zenith = useContext(ZenithContext)

  let content: ReactNode

  // Switches tags for accessibility purposes.
  // Default is <p> tag
  switch (variant) {
    case "h1":
      content = (
        <H1 zenith={zenith} font={font} {...props}>
          {children}
        </H1>
      )
      break
    case "h2":
      content = (
        <H2 zenith={zenith} font={font} {...props}>
          {children}
        </H2>
      )
      break
    case "h3":
      content = (
        <H3 zenith={zenith} font={font} {...props}>
          {children}
        </H3>
      )
      break
    case "h4":
      content = (
        <H4 zenith={zenith} font={font} {...props}>
          {children}
        </H4>
      )
      break
    case "h5":
      content = (
        <H5 zenith={zenith} font={font} {...props}>
          {children}
        </H5>
      )
      break
    case "h6":
      content = (
        <H6 zenith={zenith} font={font} {...props}>
          {children}
        </H6>
      )
      break

    default:
      content = (
        <P zenith={zenith} font={font} {...props}>
          {children}
        </P>
      )
      break
  }

  return content
}

export default Text
