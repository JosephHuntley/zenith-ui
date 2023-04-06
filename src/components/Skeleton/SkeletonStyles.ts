import { ZenithContextType } from "../../utils";
import styled, { keyframes } from "styled-components";
import { SkeletonProps } from "./Skeleton";
import { TextProps } from "./SkeletonText";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonDiv = styled.div<
  SkeletonProps & { zenith: ZenithContextType }
>`
  height: ${(props) => props.size?.height || ""};
  width: ${(props) => props.size?.width || ""};
  position: relative;
  animation: ${skeletonKeyframes} ${(props) => props.speed || "1500ms"} linear
    infinite;
  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};
  background-image: linear-gradient(
    90deg,
    ${(props) => props.colorScheme?.start || props.zenith.colors.bg_secondary},
    ${(props) => props.colorScheme?.middle || props.zenith.colors.bg_primary},
    ${(props) => props.colorScheme?.end || props.zenith.colors.bg_secondary}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;

  // Margin
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) =>
    props.margin?.bottom || props.margin?.y || ".8rem"};
  margin: ${(props) => props.margin?.m || ""};

  //Padding
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || ""};

  border-radius: ${(props) => props.radius || ".4rem"};
`;

export const Inner = styled.div`
  visibility: hidden;
`;

export const Text = styled.div<TextProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || "1rem"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || props.zenith.colors.text_primary};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};
  margin: ${(props) => props.margin?.m || ""};

  //Padding
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};
  padding: ${(props) => props.padding?.p || ""};

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || ""};
`;
