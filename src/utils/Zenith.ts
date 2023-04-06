import { ReactNode } from "react"
import { css } from "styled-components"

type defaultProps = {
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
  flex?: {
    direction?: "row" | "column"
    gap?: string
    justify?:
      | "space-around"
      | "space-between"
      | "center"
      | "flex-start"
      | "flex-end"
    align?: "end" | "start" | "center" | "flex-start" | "flex-end"
  }
  grid?: {
    colTemplate?: string
    rowTemplate?: string
    gap?: string
    justify?:
      | "space-around"
      | "space-between"
      | "center"
      | "flex-start"
      | "flex-end"
    align?: "end" | "start" | "center" | "flex-start" | "flex-end"
  }
}

type ZenithProps = defaultProps & {
  children?: ReactNode
  className?: string
  onClick?: () => any

  md?: defaultProps
  sm?: defaultProps
  xs?: defaultProps
}

type DisabledType = {
  isDisabled?: boolean
  fontColor?: string
}

export const style = css<any>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};
  background-color: ${(props) => props.color || props.zenith.colors.bg_primary};

  // Margin
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};
  margin: ${(props) => props.margin?.m || ""};

  // Padding
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || ""};

  border-radius: ${(props) => props.radius || ""};

  display: ${(props) => (props.flex ? "flex" : props.grid ? "grid" : "block")};
  flex-direction: ${(props) => props.flex?.direction};
  justify-content: ${(props) => props.flex?.justify || props.grid?.justify};
  align-items: ${(props) => props.flex?.align || props.grid?.align};
  grid-template-columns: ${(props) => props.grid?.colTemplate};
  grid-template-rows: ${(props) => props.grid?.rowTemplate};
  gap: ${(props) => props.flex?.gap || props.grid?.gap};

  @media ${(props) => props.zenith.breakpoints.tablet} {
    width: ${(props) => props.md?.size?.width || props.size?.width};
    height: ${(props) => props.md?.size?.height || props.size?.width};

    font-size: ${(props) => props.md?.font?.size || props.font?.color};
    color: ${(props) => props.md?.font?.color || props.font?.size};

    //  Margin
    margin-left: ${(props) =>
      props.md?.margin?.left ||
      props.md?.margin?.x ||
      props.margin?.left ||
      props.margin?.x};
    margin-right: ${(props) =>
      props.md?.margin?.right ||
      props.md?.margin?.x ||
      props.margin?.right ||
      props.margin?.x};
    margin-top: ${(props) =>
      props.md?.margin?.top ||
      props.md?.margin?.y ||
      props.margin?.top ||
      props.margin?.y};
    margin-bottom: ${(props) =>
      props.md?.margin?.bottom ||
      props.md?.margin?.y ||
      props.margin?.bottom ||
      props.margin?.y};
    margin: ${(props) => props.md?.margin?.m || props.margin?.m};

    // Padding
    padding-left: ${(props) =>
      props.md?.padding?.left ||
      props.md?.padding?.x ||
      props.padding?.left ||
      props.padding?.x};
    padding-right: ${(props) =>
      props.md?.padding?.right ||
      props.md?.padding?.x ||
      props.padding?.right ||
      props.padding?.x};
    padding-top: ${(props) =>
      props.md?.padding?.top ||
      props.md?.padding?.y ||
      props.padding?.top ||
      props.padding?.y};
    padding-bottom: ${(props) =>
      props.md?.padding?.bottom ||
      props.md?.padding?.y ||
      props.padding?.bottom ||
      props.padding?.y};
    padding: ${(props) => props.md?.padding?.p || props.padding?.m};

    border-radius: ${(props) => props.md?.radius || props.radius};

    display: ${(props) =>
      props.md?.flex
        ? "flex"
        : props.md?.grid
        ? "grid"
        : props.flex
        ? "flex"
        : props.grid
        ? "grid"
        : "block"};
    flex-direction: ${(props) =>
      props.md?.flex?.direction || props.flex?.direction};
    justify-content: ${(props) =>
      props.md?.flex?.justify ||
      props.md?.grid?.justify ||
      props.flex?.justify ||
      props.grid?.justify};
    align-items: ${(props) =>
      props.md?.flex?.align ||
      props.md?.grid?.align ||
      props.flex?.align ||
      props.grid?.align};
    grid-template-columns: ${(props) =>
      props.md?.grid?.colTemplate || props.grid?.colTemplate};
    grid-template-rows: ${(props) =>
      props.md?.grid?.rowTemplate || props.grid?.rowTemplate};
    gap: ${(props) =>
      props.md?.flex?.gap ||
      props.md?.grid?.gap ||
      props.flex?.gap ||
      props.grid?.gap};
  }
  @media ${(props) => props.zenith.breakpoints.phone} {
    width: ${(props) => props.sm?.size?.width || props.size?.width};
    height: ${(props) => props.sm?.size?.height || props.size?.width};

    font-size: ${(props) => props.sm?.font?.size || props.font?.color};
    color: ${(props) => props.sm?.font?.color || props.font?.size};

    //  Margin
    margin-left: ${(props) =>
      props.sm?.margin?.left ||
      props.sm?.margin?.x ||
      props.margin?.left ||
      props.margin?.x};
    margin-right: ${(props) =>
      props.sm?.margin?.right ||
      props.sm?.margin?.x ||
      props.margin?.right ||
      props.margin?.x};
    margin-top: ${(props) =>
      props.sm?.margin?.top ||
      props.sm?.margin?.y ||
      props.margin?.top ||
      props.margin?.y};
    margin-bottom: ${(props) =>
      props.sm?.margin?.bottom ||
      props.sm?.margin?.y ||
      props.margin?.bottom ||
      props.margin?.y};
    margin: ${(props) => props.sm?.margin?.m || props.margin?.m};

    // Padding
    padding-left: ${(props) =>
      props.sm?.padding?.left ||
      props.sm?.padding?.x ||
      props.padding?.left ||
      props.padding?.x};
    padding-right: ${(props) =>
      props.sm?.padding?.right ||
      props.sm?.padding?.x ||
      props.padding?.right ||
      props.padding?.x};
    padding-top: ${(props) =>
      props.sm?.padding?.top ||
      props.sm?.padding?.y ||
      props.padding?.top ||
      props.padding?.y};
    padding-bottom: ${(props) =>
      props.sm?.padding?.bottom ||
      props.sm?.padding?.y ||
      props.padding?.bottom ||
      props.padding?.y};
    padding: ${(props) => props.sm?.padding?.p || props.padding?.m};

    border-radius: ${(props) => props.sm?.radius || props.radius};

    display: ${(props) =>
      props.sm?.flex
        ? "flex"
        : props.sm?.grid
        ? "grid"
        : props.flex
        ? "flex"
        : props.grid
        ? "grid"
        : "block"};
    flex-direction: ${(props) =>
      props.sm?.flex?.direction || props.flex?.direction};
    justify-content: ${(props) =>
      props.sm?.flex?.justify ||
      props.sm?.grid?.justify ||
      props.flex?.justify ||
      props.grid?.justify};
    align-items: ${(props) =>
      props.sm?.flex?.align ||
      props.sm?.grid?.align ||
      props.flex?.align ||
      props.grid?.align};
    grid-template-columns: ${(props) =>
      props.sm?.grid?.colTemplate || props.grid?.colTemplate};
    grid-template-rows: ${(props) =>
      props.sm?.grid?.rowTemplate || props.grid?.rowTemplate};
    gap: ${(props) =>
      props.sm?.flex?.gap ||
      props.sm?.grid?.gap ||
      props.flex?.gap ||
      props.grid?.gap};
  }
  @media ${(props) => props.zenith.breakpoints.xs} {
    width: ${(props) => props.xs?.size?.width || props.size?.width};
    height: ${(props) => props.xs?.size?.height || props.size?.width};

    font-size: ${(props) => props.xs?.font?.size || props.font?.color};
    color: ${(props) => props.xs?.font?.color || props.font?.size};

    //  Margin
    margin-left: ${(props) =>
      props.xs?.margin?.left ||
      props.xs?.margin?.x ||
      props.margin?.left ||
      props.margin?.x};
    margin-right: ${(props) =>
      props.xs?.margin?.right ||
      props.xs?.margin?.x ||
      props.margin?.right ||
      props.margin?.x};
    margin-top: ${(props) =>
      props.xs?.margin?.top ||
      props.xs?.margin?.y ||
      props.margin?.top ||
      props.margin?.y};
    margin-bottom: ${(props) =>
      props.xs?.margin?.bottom ||
      props.xs?.margin?.y ||
      props.margin?.bottom ||
      props.margin?.y};
    margin: ${(props) => props.xs?.margin?.m || props.margin?.m};

    // Padding
    padding-left: ${(props) =>
      props.xs?.padding?.left ||
      props.xs?.padding?.x ||
      props.padding?.left ||
      props.padding?.x};
    padding-right: ${(props) =>
      props.xs?.padding?.right ||
      props.xs?.padding?.x ||
      props.padding?.right ||
      props.padding?.x};
    padding-top: ${(props) =>
      props.xs?.padding?.top ||
      props.xs?.padding?.y ||
      props.padding?.top ||
      props.padding?.y};
    padding-bottom: ${(props) =>
      props.xs?.padding?.bottom ||
      props.xs?.padding?.y ||
      props.padding?.bottom ||
      props.padding?.y};
    padding: ${(props) => props.xs?.padding?.p || props.padding?.m};

    border-radius: ${(props) => props.xs?.radius || props.radius};

    display: ${(props) =>
      props.xs?.flex
        ? "flex"
        : props.xs?.grid
        ? "grid"
        : props.flex
        ? "flex"
        : props.grid
        ? "grid"
        : "block"};
    flex-direction: ${(props) =>
      props.xs?.flex?.direction || props.flex?.direction};
    justify-content: ${(props) =>
      props.xs?.flex?.justify ||
      props.xs?.grid?.justify ||
      props.flex?.justify ||
      props.grid?.justify};
    align-items: ${(props) =>
      props.xs?.flex?.align ||
      props.xs?.grid?.align ||
      props.flex?.align ||
      props.grid?.align};
    grid-template-columns: ${(props) =>
      props.xs?.grid?.colTemplate || props.grid?.colTemplate};
    grid-template-rows: ${(props) =>
      props.xs?.grid?.rowTemplate || props.grid?.rowTemplate};
    gap: ${(props) =>
      props.xs?.flex?.gap ||
      props.xs?.grid?.gap ||
      props.flex?.gap ||
      props.grid?.gap};
  }
`

export type { DisabledType, ZenithProps }
