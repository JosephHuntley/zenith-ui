import styled from "styled-components";
import { CardProps } from "./Card";
import { HeaderProps } from "./CardHeader";
import { BodyProps } from "./CardBody";
import { FooterProps } from "./CardFooter";
import { ZenithContextType } from "../../utils";

export const Main = styled.div<CardProps & { zenith: ZenithContextType }>`
  height: ${(props) =>
    props.size === "responsive"
      ? "none"
      : props.size === "lg"
      ? "45rem"
      : props.size === "md"
      ? "37rem"
      : "27rem"};
  width: ${(props) =>
    props.size === "responsive"
      ? "none"
      : props.size === "lg"
      ? "38rem"
      : props.size === "md"
      ? "30rem"
      : "23rem"};

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

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};

  display: grid;
  ${(props) =>
    props.size === "responsive"
      ? "grid-template-rows: 1fr 2fr 1 fr;"
      : props.size === "lg"
      ? "grid-template-rows: 0.3fr 2fr 0.3fr;"
      : props.size === "md"
      ? "grid-template-rows: 0.5fr 2fr 0.5fr;"
      : "grid-template-rows: 0.5fr 2fr 0.5fr;"}

  background-color: ${(props) =>
    props.variant === "outline"
      ? "transparent"
      : props.color || props.zenith.colors.bg_secondary};
  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  box-shadow: ${(props) =>
    props.variant === "elevated" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "hover" ? "transparent" : "none"};
  }
`;

export const Header = styled.header<
  HeaderProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || "3rem"};
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
  padding: ${(props) => props.padding?.p || "1rem"};
`;

export const Body = styled.div<BodyProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

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

  border: 1px solid ${(props) => props.color || "none"};
  border-radius: ${(props) => props.radius || "none"};

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Footer = styled.footer<
  FooterProps & { zenith: ZenithContextType }
>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || "2rem"};
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
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || "1.5rem"};

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || ""};

  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
