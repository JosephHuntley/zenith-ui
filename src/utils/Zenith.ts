import { ReactNode } from "react"

type ZenithProps = {
  children?: ReactNode
  className?: string
  onClick?: () => any
  size?: { width?: string; height?: string }
  color?: string
  font?: { size?: string; color?: string }
  radius?: string
  padding?: {
    p?: string
    x?: string
    y?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  margin?: {
    m?: string
    x?: string
    y?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}

type DisabledType = {
  isDisabled?: boolean
  fontColor?: string
}

export type { DisabledType, ZenithProps }

// TODO: Temporary
/*
	width: ${(props) => props.size?.width || ''};
	height: ${(props) => props.size?.height || ''};

	font-size: ${(props) => props.font?.size || ' '};
	color: ${(props) => props.font?.color || ' '};

	background-color: ${(props) =>
		props.color || props.theme.colors.bg_secondary};
 
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

	border: 1px solid ${(props) => props.color || props.theme.colors.bg_secondary};
	border-radius: ${(props) => props.radius || ''};
*/
