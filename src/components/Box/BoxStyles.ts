import { ZenithContextType } from "../../utils"
import styled from "styled-components"
import { BoxProps } from "./Box"

export const Main = styled.div<BoxProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "10rem"};
  height: ${(props) => props.size?.height || "10rem"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color:${(props) => props.color || ""};

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

  //Display  
  display: ${(props) =>
    props.flex ? "flex" : props.grid ? "grid" : "initial"};

  // Flex
  flex-direction: ${(props) => props.flex?.direction};
  justify-content: ${(props) => props.flex?.justify};
  
  // Grid
  grid-template-columns: ${(props) => props.grid?.colTemplate};
  grid-template-rows: ${(props) => props.grid?.rowTemplate};
  gap: ${(props) => props.flex?.gap || props.grid?.gap};

  // Position
  position: ${(props) => props.position?.position || "initial"};
  top: ${(props) => props.position?.top || "0"};
  bottom: ${(props) => props.position?.bottom || "0"};
  left: ${(props) => props.position?.left || "0"};
  right: ${(props) => props.position?.right || "0"};

  z-index:${props => props.position?.z || ''};

  overflow:scroll;
`
