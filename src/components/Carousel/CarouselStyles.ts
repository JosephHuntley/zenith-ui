import styled from "styled-components";
import { CarouselProps } from "./Carousel";
import { ZenithContextType } from "../../utils";

export const Main = styled.div<CarouselProps>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.size?.height || "100%"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) => props.color || "transparent"};

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

  border-radius: ${(props) => props.radius || ""};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Arrow = styled.div<CarouselProps & { zenith: ZenithContextType }>`
  height: ${(props) => props.arrow?.size || "0.6rem"};
  width: ${(props) => props.arrow?.size || "0.6rem"};
  border: solid ${(props) => props.zenith.colors.white};
  border-width: 0 ${(props) => props.arrow?.size || "0.6rem"}
    ${(props) => props.arrow?.size || "0.6rem"} 0;
  display: inline-block;
  padding: ${(props) => props.arrow?.size || "0.6rem"};
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(-45deg);
`;

export const LeftArrow = styled(Arrow)`
  transform: rotate(135deg);
`;
// prettier-ignore
export const Ellipse = styled.span<CarouselProps & { active: boolean; zenith: ZenithContextType }>`
	width: 1px;
	height: 1px;
	background-color: ${(props) =>
		props.active ? props.zenith.colors.bg_secondary : props.zenith.colors.white};
	border: 1px solid ${(props) =>
		props.active ? props.zenith.colors.bg_secondary : props.zenith.colors.white};
	border-radius: 0.3rem;
	padding: 1px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;
