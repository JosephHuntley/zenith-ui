import styled from "styled-components";
import { BadgeProps } from "./Badge";
import { ZenithContextType, style } from "../../utils";

export const BadgeMain = styled.span<BadgeProps & { zenith: ZenithContextType }>`
${style}
 
  font-size: ${(props) => props.font?.size || "1rem"};
  color: ${(props) =>
    props.font?.color || props.zenith.status[props.status].font};

  
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

  border-radius: ${props => props.radius || '.3rem'};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};

  //Padding
  padding: ${(props) => props.padding?.p || ".3rem"};

  border: 1px solid
    ${(props) => props.color || props.zenith.status[props.status].bg};
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
