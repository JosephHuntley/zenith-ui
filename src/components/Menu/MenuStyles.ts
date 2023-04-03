import styled from "styled-components";
import { MenuProps } from "./Menu";
import { MenuListProps } from "./MenuList";
import { MenuButtonProps } from "./MenuButton";
import { MenuItemProps } from "./MenuItem";
import { ZenithContextType } from "../../utils";

export const MenuMain = styled.div<MenuProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  // Margin
  margin: ${(props) => props.margin?.m || ""};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || ""};
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};

  border-radius: ${(props) => props.radius || "0.7rem"};

  position: relative;
`;

export const List = styled.ul<MenuListProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};
  min-width: ${(props) => props.size?.width || "15rem"};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin: ${(props) => props.margin?.m || ""};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || ""};
  padding-left: ${(props) =>
    props.padding?.left || props.padding?.x || "1.5rem"};
  padding-right: ${(props) =>
    props.padding?.right || props.padding?.x || "1.5rem"};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || "1rem"};
  padding-bottom: ${(props) =>
    props.padding?.bottom || props.padding?.y || "1rem"};

  border-radius: ${(props) => props.radius || "0.7rem"};
  border: 1px solid ${(props) => props.color || "#444"};

  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: calc(100% + 5px);
  left: 0;
`;
// prettier-ignore
export const Button = styled.button<MenuButtonProps & { zenith: ZenithContextType }>`
	width: ${(props) => props.size?.width || ''};
	min-height: ${(props) => props.size?.height || '3rem'};
	height: ${(props) => props.size?.height || ''};

	font-size: ${(props) => props.font?.size || '2rem'};
	color: ${(props) => props.font?.color || 'inherit'};

	background-color: ${(props) =>
		props.color || props.zenith.colors.bg_secondary};

	border: ${(props) =>
		`2px solid  ${props.color || props.zenith.colors.bg_secondary}`};

	// Margin
	margin: ${(props) => props.margin?.m || ''};
	margin-left: ${(props) => props.margin?.left || props.margin?.x || ''};
	margin-right: ${(props) => props.margin?.right || props.margin?.x || ''};
	margin-top: ${(props) => props.margin?.top || props.margin?.y || ''};
	margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ''};

	//Padding
	padding: ${(props) => props.padding?.p || ''};
	padding-left: ${(props) => props.padding?.left || props.padding?.x || '2rem'};
	padding-right: ${(props) =>
		props.padding?.right || props.padding?.x || '2rem'};
	padding-top: ${(props) => props.padding?.top || props.padding?.y || ''};
	padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ''};

	border-radius: ${(props) => props.radius || '0.7rem'};
`;

export const Item = styled.li<MenuItemProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || ""};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || " "};
  color: ${(props) => props.font?.color || " "};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin: ${(props) => props.margin?.m || ""};
  margin-left: ${(props) => props.margin?.left || props.margin?.x || ""};
  margin-right: ${(props) => props.margin?.right || props.margin?.x || ""};
  margin-top: ${(props) => props.margin?.top || props.margin?.y || ""};
  margin-bottom: ${(props) => props.margin?.bottom || props.margin?.y || ""};

  //Padding
  padding: ${(props) => props.padding?.p || "1rem"};
  padding-left: ${(props) => props.padding?.left || props.padding?.x || ""};
  padding-right: ${(props) => props.padding?.right || props.padding?.x || ""};
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ""};
  padding-bottom: ${(props) => props.padding?.bottom || props.padding?.y || ""};

  border-radius: ${(props) => props.radius || "0.7rem"};
`;
