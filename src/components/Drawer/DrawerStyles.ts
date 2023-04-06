import { ZenithContextType } from "../../utils";
import styled from "styled-components";
import { DrawerProps } from "./Drawer";

export const DrawerMain = styled.section<
  DrawerProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || "25vw"};
  height: ${(props) => props.size?.height || "100%"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || "1rem"};
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};

  position: absolute;
  top: -10px;
  // Default is right side
  right: ${(props) => (props.position === "left" ? "" : "-15px")};
  left: ${(props) => (props.position === "left" ? "-15px" : "")};
  z-index: 99;

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};
`;
