import { ZenithContextType } from "../../utils"
import styled from "styled-components"
import { TextProps } from "./Text"

export const H1 = styled.h1<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const H2 = styled.h2<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  font-size: ${(props) => props.font?.size || ""};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const H3 = styled.h3<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const H4 = styled.h4<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const H5 = styled.h5<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const H6 = styled.h6<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`

export const P = styled.p<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
`
