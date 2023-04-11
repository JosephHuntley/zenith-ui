import { ZenithContextType } from "../../utils";
import styled from "styled-components";
import type { dividerProps } from "./Divider";
import {style} from '../../utils'

export const CenterHorizontal = styled.div<dividerProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.thickness};
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const DividerLineHorizontal = styled.hr<dividerProps & { zenith: ZenithContextType }>`
  ${style}
  width: ${(props) => props.size?.width || "100%"};
  

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};

  border-top: ${(props) =>
    `${props.size?.height || "0.1rem"} ${props.variant || "solid"} ${
      props.color || props.zenith.colors.bg_secondary
    }`};
  border-left: none;
  border-right: none;
  border-bottom: none;

  opacity: ${(props) => props.opacity || "0.3"};

  position: relative;
`;
