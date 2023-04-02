import { ZenithContextType } from "../../utils"
import styled from "styled-components"
import { ContainerProps } from "./Container"

export const Main = styled.div<ContainerProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  // Margin
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};
  margin: ${(props) => props.margin?.m || ""};

  //Padding
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || ""};

  border-radius: ${(props) => props.radius || ""};

  display: ${(props) =>
    props.flex ? "flex" : props.grid ? "grid" : "initial"};
  flex-direction: ${(props) => props.flex?.direction};
  justify-content: ${(props) => props.flex?.justify};
  grid-template-columns: ${(props) => props.grid?.colTemplate};
  grid-template-rows: ${(props) => props.grid?.rowTemplate};
  gap: ${(props) => props.flex?.gap || props.grid?.gap};
`
