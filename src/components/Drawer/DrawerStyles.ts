import { ZenithContextType, style } from "../../utils";
import styled from "styled-components";
import { DrawerProps } from "./Drawer";

export const DrawerMain = styled.section<DrawerProps & { zenith: ZenithContextType }>`
${style}
  width: ${(props) => props.size?.width || "25vw"};
  height: ${(props) => props.size?.height || "100%"};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};

  //Padding
  padding: ${(props) => props.padding?.p || "1rem"};

  position: fixed;
  top: -10px;


  // Default is right side
  right: ${(props) => (props.position === "left" ? "" : "-15px")};
  left: ${(props) => (props.position === "left" ? "-15px" : "")};
  z-index: 99;

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};

  overflow-y: scroll;

  @media ${props => props.zenith.breakpoints.tablet} {
  width: ${(props) => props.md?.size?.width || "75vw"};
  height: ${(props) => props.md?.size?.height || "80vh"};
  top: ${props => props.top || '0'};
  right: 0;
  
  margin: ${(props) => props.md?.margin?.m || "0"};
  }
  @media ${props => props.zenith.breakpoints.phone} {
  width: ${(props) => props.sm?.size?.width || props.md?.size?.width};
  height: ${(props) => props.sm?.size?.height || props.md?.size?.height};
  top: ${props => props.top || '0'};
  right: 0;
  left:0;
  margin: ${(props) => props.sm?.margin?.m || props.md?.margin?.m};
  }
  @media ${props => props.zenith.breakpoints.xs} {
  width: ${(props) => props.xs?.size?.width || props.sm?.size?.width};
  height: ${(props) => props.xs?.size?.height || props.sm?.size?.height};
  top: ${props => props.top || '0'};
  right: 0;
  left:0;
  margin: ${(props) => props.xs?.margin?.m || props.sm?.margin?.m};
  }
`;
