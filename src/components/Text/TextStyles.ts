import { ZenithContextType } from "../../utils";
import styled from "styled-components";
import { TextProps } from "./Text";

export const H1 = styled.h1<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const H2 = styled.h2<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  font-size: ${(props) => props.font?.size || ""};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const H3 = styled.h3<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const H4 = styled.h4<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const H5 = styled.h5<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};
	background-color: ${props => props.color || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const H6 = styled.h6<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};
  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;

export const P = styled.p<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width};
  font-size: ${(props) => props.font?.size};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  text-align: ${(props) => props.align};

  background-color: ${props => props.color || ''};

  // Margin
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};
	margin: ${(props) => props.margin?.m || ''};

	//Padding
	padding-left: ${(props) => props.padding?.left || props.padding?.x || ''};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || ''};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};
	padding: ${(props) => props.padding?.p || ''};
`;
