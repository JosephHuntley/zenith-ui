import styled from "styled-components";

export const PortalContainer = styled.div<{ zIndex?: string }>`
  width: 100%;
  // * 100% is body height -100px therefore for portal to be body size it must be 100% + 100px
  height: calc(100% + 100px);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  /* Chakra UI Faced issues that made the app unusable with bottom */
  bottom: 0;
  z-index: ${(props) => props.zIndex || "0"};
`;
