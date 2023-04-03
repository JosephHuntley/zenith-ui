import { ZenithContextType } from "../../utils";
import styled from "styled-components";
import { ToolTipProps } from "./ToolTip";

export const Div = styled.div`
  position: relative;
`;

export const ToolTipMain = styled.div<
  ToolTipProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};
  margin: ${(props) => props.margin?.m || ""};

  //Padding
  padding-left: ${(props) => props.padding?.left || props.padding?.x || "2rem"};
  padding-right: ${(props) =>
    props.padding?.right || props.padding?.x || "2rem"};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ".5rem"};
  padding-bottom: ${(props) =>
    props.padding?.bottom || props.padding?.y || ".5rem"};
  padding: ${(props) => props.padding?.p || ""};

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};

  position: absolute;

  top: ${(props) =>
    props.position === "top"
      ? `calc(-250% + ${props.arrow?.arrowSize || "0px"})`
      : props.position !== "bottom"
      ? "100%"
      : `calc(100% + ${props.arrow?.arrowSize || "0px"})`};

  left: ${(props) =>
    props.position === "right"
      ? `calc(100% + ${props.arrow?.arrowSize || "10px"})`
      : ""};

  right: ${(props) =>
    props.position === "left"
      ? `calc(100% + ${props.arrow?.arrowSize || "10px"})`
      : ""};
`;

export const ArrowUp = styled.div<ToolTipProps & { zenith: ZenithContextType }>`
  width: 0;
  height: 0;
  border-left: ${(props) => props.arrow?.arrowSize} solid transparent;
  border-right: ${(props) => props.arrow?.arrowSize} solid transparent;

  border-bottom: ${(props) => props.arrow?.arrowSize} solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};

  position: absolute;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
`;

export const ArrowLeft = styled.div<
  ToolTipProps & { zenith: ZenithContextType }
>`
  width: 0;
  height: 0;
  border-left: ${(props) => props.arrow?.arrowSize} solid transparent;
  border-right: ${(props) => props.arrow?.arrowSize} solid transparent;

  border-bottom: ${(props) => props.arrow?.arrowSize} solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};

  position: absolute;
  top: 10%;
  right: -25%;
  transform: rotate(-90deg);
`;

export const ArrowRight = styled.div<
  ToolTipProps & { zenith: ZenithContextType }
>`
  width: 0;
  height: 0;
  border-left: ${(props) => props.arrow?.arrowSize} solid transparent;
  border-right: ${(props) => props.arrow?.arrowSize} solid transparent;

  border-bottom: ${(props) => props.arrow?.arrowSize} solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};

  position: absolute;
  top: 10%;
  left: -25%;
  transform: rotate(90deg);
`;
export const ArrowDown = styled.div<
  ToolTipProps & { zenith: ZenithContextType }
>`
  width: 0;
  height: 0;
  border-left: ${(props) => props.arrow?.arrowSize} solid transparent;
  border-right: ${(props) => props.arrow?.arrowSize} solid transparent;

  border-bottom: ${(props) => props.arrow?.arrowSize} solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};

  position: absolute;
  top: -30%;
  right: 50%;
  transform: rotate(180deg) translateX(-50%);
`;
