import styled from "styled-components";
import { BadgeProps } from "./Badge";
import { ZenithContextType } from "../../utils";

export const BadgeMain = styled.span<
  BadgeProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || "1rem"};
  color: ${(props) =>
    props.font?.color || props.zenith.status[props.status].font};

  // If the user has a props.color set then that is the BG color.
  // Else if the variant is outline or hover outline the BG is transparent
  // Else the color is the value of bg_secondary
  background-color: ${(props) =>
    props.variant === "outline" || props.variant === "hover-outline"
      ? "transparent"
      : props.color
      ? props.color
      : props.zenith.status[props.status].bg};

  // Flex
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || ".3rem"};
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};

  border: 1px solid
    ${(props) => props.color || props.zenith.status[props.status].bg};
  border-radius: ${(props) => props.radius || "0.3rem"};
  box-shadow: ${(props) =>
    props.variant === "elevated" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "hover"
        ? "transparent"
        : props.variant === "hover-outline"
        ? props.color || props.zenith.status[props.status].bg
        : "none"};
  }
`;
