import { ZenithContextType } from "../../utils"
import styled from "styled-components"
import { ButtonProps } from "./Button"

export const Main = styled.button<ButtonProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  min-height: ${(props) => props.size?.height || "3rem"};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
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
  border-radius: 0.5rem;

  box-shadow: ${(props) =>
    props.variant === "elevated" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};

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
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || ""};

  cursor: ${(props) =>
    props.Disabled?.isDisabled ? "not-allowed" : "pointer"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "hover" || props.variant === "outline"
        ? props.zenith.colors.bg_secondary
        : "none"};
  }
`
