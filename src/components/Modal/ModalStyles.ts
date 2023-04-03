import styled from "styled-components";
import { props } from "./Modal";
import { props as HeaderProps } from "./ModalHeader";
import { props as BodyProps } from "./ModalBody";
import { props as FooterProps } from "./ModalFooter";
import { ZenithContextType } from "../../utils";

export const Section = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Center = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
`;

export const ModalBox = styled.div<props & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "90vw"};
  height: ${(props) => props.size?.width || "90vh"};
  background: ${(props) =>
    props.variant === "outline" || props.variant === "hover"
      ? "rgba(0, 0, 0, 0.5)"
      : props.color || props.zenith.colors.bg_secondary};

  color: ${(props) => props.font?.color || "#fff"};
  size: ${(props) => props.font?.size || "1.6rem"};

  border-radius: 16px;
  border: ${(props) =>
    props.variant === "hover"
      ? "none"
      : `2px solid  ${props.color || props.zenith.colors.bg_secondary}`};
  box-shadow: ${(props) =>
    props.variant === "elevated" ? "0 5px 20px 0 rgba(0, 0, 0, 0.04)" : "none"};

  position: relative;
  z-index: 99;

  display: grid;
  grid-template-rows: minmax(15%, 100%) minmax(70%, 100%) minmax(15%, 100%);

  padding: 2rem;

  &:hover {
    background-color: ${(props) =>
      props.variant === "hover" || props.variant === "outline"
        ? props.zenith.colors.bg_secondary
        : "none"};
  }
`;

export const Header = styled.header<HeaderProps>`
  font-size: ${(props) => props.font?.size || "3rem"};
  color: ${(props) => props.font?.color || "#fff"};
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Body = styled.section<BodyProps>`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? "center" : "flex-end")};
`;

export const Footer = styled.footer<FooterProps>`
  font-size: ${(props) => props.font?.size || "2rem"};
  color: ${(props) => props.font?.color || "#fff"};

  margin-top: 2rem;
  display: flex;
  align-items: end;
`;

export const Close = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  left: 97.5%;
  /* right: 0; */
  top: 1rem;
`;
