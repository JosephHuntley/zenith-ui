import React, { useContext } from "react"
import styled from "styled-components"
import { ZenithContext, ZenithContextType, ZenithProps } from "../../utils"

type ProgressProps = ZenithProps & {
  value: number
  outerColor?: string
  innerColor?: string
}

const Outer = styled.div<ProgressProps>`
  width: ${(props) => props.size?.width || "20rem"};
  height: ${(props) => props.size?.height || "1.5rem"};
  background-color: ${(props) => props.outerColor || "#aaa"};
  border: 0.5px solid ${(props) => props.outerColor || "#aaa"};
  position: relative;
  z-index: 0;
  border-radius: ${(props) => props.radius || "3rem"};
  display: flex;
  align-items: center;
`

const Inner = styled.div<ProgressProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.value}%;
  height: calc(${(props) => props.size?.height || "100%"} - 1px);
  background-color: ${(props) =>
    props.innerColor || props.zenith.colors.bg_secondary};
  position: relative;
  z-index: 10;
  border-radius: ${(props) => props.radius || "3rem"};
  transition: 300ms all;
`

const Progress = (props: ProgressProps) => {
  const zenith = useContext(ZenithContext)
  return (
    <Outer {...props}>
      <Inner zenith={zenith} {...props} />
    </Outer>
  )
}

export default Progress
