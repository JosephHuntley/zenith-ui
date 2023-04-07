import { ZenithContextType, style } from "../../utils";
import styled from "styled-components";
import { ButtonProps } from "./Button";

export const Main = styled.button<ButtonProps & { zenith: ZenithContextType }>`
  ${style}
  min-height: ${(props) => props.size?.height || "3rem"};
  
  color: ${(props) =>
    props.Disabled?.isDisabled
      ? props.Disabled?.fontColor || "#666"
      : props.font?.color || props.zenith.colors.text_primary};

  background-color: ${(props) =>
    props.variant === "outline" || props.variant === "hover"
      ? "transparent"
      : props.color || props.zenith.colors.bg_secondary};
  border: ${(props) =>
    props.variant === "hover"
      ? "none"
      : `2px solid  ${props.color || props.zenith.colors.bg_secondary}`};
  border-radius: ${props => props.radius || '0.5rem'};

  box-shadow: ${(props) =>
    props.variant === "elevated" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};
  
  cursor: ${(props) =>
    props.Disabled?.isDisabled ? "not-allowed" : "pointer"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "hover" || props.variant === "outline"
        ? props.zenith.colors.bg_secondary
        : "none"};
  }
`;
