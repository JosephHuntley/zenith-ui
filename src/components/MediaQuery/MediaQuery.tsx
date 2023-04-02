import React, { ReactNode } from "react"
import styled from "styled-components"
import { ZenithProps } from "../../utils"

type props = ZenithProps & {
  query: string
}

const Main = styled.div<props>`
  display: none;
  @media ${(props) => `screen and (${props.query})`} {
    display: initial;
  }
`

const MediaQuery = ({ query, children }: props) => {
  return <Main query={query}>{children}</Main>
}

export default MediaQuery
