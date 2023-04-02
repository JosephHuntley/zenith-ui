import styled from "styled-components"
import { CenterProps } from "./Center"
import { SquareProps } from "./CenterSquare"
import { CircleProps } from "./CenterCircle"
import { ZenithContextType } from "../../utils"

export const Outer = styled.div<CenterProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.size?.height || "100%"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) => props.color || "transparent"};

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
`

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 10;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const OuterSquare = styled.div<
  SquareProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.fullSize};
  height: ${(props) => props.fullSize};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) => props.color || "transparent"};

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
`

export const OuterCircle = styled.div<
  CircleProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.fullSize};
  height: ${(props) => props.fullSize};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) => props.color || "transparent"};

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

  border-radius: ${(props) => props.radius || "30rem"};
`
