import styled from "styled-components";
import { CardProps } from "./Card";
import { HeaderProps } from "./CardHeader";
import { BodyProps } from "./CardBody";
import { FooterProps } from "./CardFooter";
import { ZenithContextType } from "../../utils";
import { style } from "../../utils/Zenith";

export const Main = styled.div<CardProps & { zenith: ZenithContextType }>`
  ${style}
  border-radius: ${props => props.radius || '1rem'};
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

  @media ${props => props.zenith.breakpoints.tablet} {
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
display: grid;
${(props) =>
    props.size === "responsive"
      ? "grid-template-rows: 1fr 2fr 1 fr;"
      : props.size === "lg"
      ? "grid-template-rows: 0.3fr 2fr 0.3fr;"
      : props.size === "md"
      ? "grid-template-rows: 0.5fr 2fr 0.5fr;"
      : "grid-template-rows: 0.5fr 2fr 0.5fr;"}
      
  }
  @media ${props => props.zenith.breakpoints.phone} {
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
display: grid;
${(props) =>
    props.size === "responsive"
      ? "grid-template-rows: 1fr 2fr 1 fr;"
      : props.size === "lg"
      ? "grid-template-rows: 0.3fr 2fr 0.3fr;"
      : props.size === "md"
      ? "grid-template-rows: 0.5fr 2fr 0.5fr;"
      : "grid-template-rows: 0.5fr 2fr 0.5fr;"}
      
  }
  @media ${props => props.zenith.breakpoints.xs} {
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
display: grid;
${(props) =>
    props.size === "responsive"
      ? "grid-template-rows: 1fr 2fr 1 fr;"
      : props.size === "lg"
      ? "grid-template-rows: 0.3fr 2fr 0.3fr;"
      : props.size === "md"
      ? "grid-template-rows: 0.5fr 2fr 0.5fr;"
      : "grid-template-rows: 0.5fr 2fr 0.5fr;"}
      
  }
`;

export const Header = styled.header<HeaderProps & { zenith: ZenithContextType }>`
  border-radius: ${props => props.radius || '1rem'};
  font-size: ${(props) => props.font?.size || "3rem"};
  background-color: ${(props) => props.color || "transparent"};
  padding: ${(props) => props.padding?.p || "1rem"};
  ${style}
`;

export const Body = styled.div<BodyProps & { zenith: ZenithContextType }>`
  ${style}

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Footer = styled.footer<FooterProps & { zenith: ZenithContextType }>`
${style}
border-radius: ${props => props.radius || '1rem'};
  width: ${(props) => props.size?.width || `calc(100% - ${props.margin?.m || '0px'})`};
  
  font-size: ${(props) => props.font?.size || "2rem"};
  
  background-color: ${(props) =>
    props.color || 'transparent'};

  
  padding: ${(props) => props.padding?.p || "1.5rem"};

  
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
