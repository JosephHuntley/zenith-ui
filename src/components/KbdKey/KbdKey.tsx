import React, { useContext } from "react"
import { ZenithContext, ZenithContextType, ZenithProps } from "../../utils"
import styled from "styled-components"

type KeyProps = ZenithProps & {}

const Key = styled.span<KeyProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};

  background-color: ${(props) => props.color || props.zenith.colors.bg_primary};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || ""};
  padding-left: ${(props) =>
    props.padding?.left || props.padding?.x || ".7rem"};
  padding-right: ${(props) =>
    props.padding?.right || props.padding?.x || ".7rem"};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ".2rem"};
  padding-bottom: ${(props) =>
    props.padding?.bottom || props.padding?.y || ".2rem"};

  border: 1px solid ${(props) => props.zenith.colors.bg_secondary};
  border-bottom: 4px solid ${(props) => props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};

  position: relative;

  &:hover {
    border: 1px solid ${(props) => props.zenith.colors.bg_secondary};
    bottom: -3px;
  }
`

const KbdKey = (props: KeyProps) => {
  const zenith = useContext(ZenithContext)
  return (
    <Key zenith={zenith} {...props}>
      {props.children}
    </Key>
  )
}

export default KbdKey
