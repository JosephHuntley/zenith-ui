import styled from "styled-components";
import { AccordionProps } from "./Accordion";
import { ItemProps } from "./AccordionItem";
import { HeaderProps } from "./AccordionHeader";
import { PanelProps } from "./AccordionPanel";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { ZenithContextType } from "../../utils";

export const Main = styled.section<AccordionProps & { zenith: ZenithContextType }>`
  min-width: ${(props) => props.size?.width || "40rem"};
  width: ${(props) => props.size?.width || "40rem"};
  height: ${(props) => props.size?.height || ""};

  font-size: ${(props) => props.font?.size || "inherit"};
  color: ${(props) => props.font?.color || "inherit"};

  background-color: ${(props) =>
    props.color || props.zenith.colors.bg_secondary};

  // Margin
  margin: ${(props) => props.margin?.m || "1rem"};
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

  border: 1px solid
    ${(props) => props.color || props.zenith.colors.bg_secondary};
  border-radius: ${(props) => props.radius || "0.7rem"};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
`;

export const Item = styled.article<ItemProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "100% "};
  height: ${(props) => props.size?.height || ""};

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Header = styled.header<HeaderProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.size?.height || ""};

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
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ".5rem"};
  padding-bottom: ${(props) =>
    props.padding?.bottom || props.padding?.y || ".5rem"};

  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Panel = styled.div<PanelProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.size?.width || "100%"};
  height: ${(props) => props.size?.height || ""};

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
  padding-top: ${(props) => props.padding?.top || props.padding?.y || ".5rem"};
  padding-bottom: ${(props) =>
    props.padding?.bottom || props.padding?.y || ".5rem"};

  display: flex;
  flex-direction: column;
`;

export const UpArrow = styled(AiOutlineUp)<HeaderProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.icon?.size || "1.5rem"};
  height: ${(props) => props.icon?.size || "1.5rem"};
  color: ${(props) => props.icon?.color || props.zenith.colors.text_primary};
`;

export const DownArrow = styled(AiOutlineDown)<HeaderProps & { zenith: ZenithContextType }>`
  width: ${(props) => props.icon?.size || "1.5rem"};
  height: ${(props) => props.icon?.size || "1.5rem"};
  color: ${(props) => props.icon?.color || props.zenith.colors.text_primary};
`;
