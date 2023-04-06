import { ZenithContextType } from "../../utils";
import styled, {css} from "styled-components";
import { TextProps } from "./Text";
import {style} from '../../utils/Zenith'




export const H1 = styled.h1<TextProps & { zenith: ZenithContextType }>`
${style}
`;

export const H2 = styled.h2<TextProps & { zenith: ZenithContextType }>`
 ${style}
`;

export const H3 = styled.h3<TextProps & { zenith: ZenithContextType }>`
  ${style}
`;

export const H4 = styled.h4<TextProps & { zenith: ZenithContextType }>`
 ${style}
`;

export const H5 = styled.h5<TextProps & { zenith: ZenithContextType }>`
  ${style}
`;

export const H6 = styled.h6<TextProps & { zenith: ZenithContextType }>`
   ${style}
`;

export const P = styled.p<TextProps & { zenith: ZenithContextType }>`
 ${style}
`;
