import { ZenithContextType } from "../../utils";
import styled from "styled-components";
import { ContainerProps } from "./Container";
import { style } from "../../utils/Zenith";

export const Main = styled.div<ContainerProps & { zenith: ZenithContextType }>`
  ${style}
  overflow: ${props => props.overflow || 'visible'};
`;
