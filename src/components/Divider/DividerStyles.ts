import { ZenithContextType } from "../../utils"
import styled from "styled-components"
import type { dividerProps } from "./Divider"

export const CenterHorizontal = styled.div<
  dividerProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.thickness};
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

export const DividerLineHorizontal = styled.hr<
  dividerProps & { zenith: ZenithContextType }
>`
  // Size
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.thickness};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || ""};
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};

  border-top: ${(props) =>
    `${props.size?.height || "0.1rem"} ${props.variant || "solid"} ${
      props.color || props.zenith.colors.bg_secondary
    }`};
  border-left: none;
  border-right: none;
  border-bottom: none;

  opacity: ${(props) => props.opacity || "0.3"};

  position: relative;
`
