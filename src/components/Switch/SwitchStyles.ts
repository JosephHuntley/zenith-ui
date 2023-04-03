import styled from "styled-components";
import { SwitchProps } from "./Switch";

export const Label = styled.label<SwitchProps>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const SwitchButton = styled.div<SwitchProps>`
  position: relative;
  width: ${(props) => props.size?.width || "6rem"};
  height: ${(props) => props.size?.height || "3rem"};
  background: ${(props) => props.color || "#b3b3b3"};
  border-radius: ${(props) => props.radius || "3.2rem"};

  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: ${(props) => props.size?.height || "3rem"};
    height: ${(props) => props.size?.height || "3rem"};
    border-radius: 35px;
    top: 50%;
    left: 0px;
    background: white;
    transform: translate(0, -50%);
  }
`;
export const Input = styled.input<SwitchProps>`
  opacity: 0;
  position: absolute;
  &:checked + ${SwitchButton} {
    background: ${(props) => props.btnColor || "#00ff00"};
    &:before {
      transform: translate(100%, -50%);
    }
  }
`;
