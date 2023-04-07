import styled from "styled-components";
import {style, ZenithContextType} from "../../utils"
import { AlertProps } from "./Alert";

export const Main = styled.div<AlertProps & {zenith:ZenithContextType}>`
    ${style}
    min-width: ${props => props.size?.width || '50vw'};
    padding: ${props => props.padding?.p || '2rem'};

	background-color: ${props => props.color || props.zenith.colors.bg_secondary};
	top:${props => props.top || '5rem'};
    position: fixed;
	left: 50%;
	transform: translate(-50%, -50%);

	border-radius: ${props => props.radius || '1rem'};

    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: 99;

    &:hover {
		opacity: 0.6;
	}

	@media ${(props) => props.zenith.breakpoints.tablet} {
		top:${props => props.top || '10rem'};
		display: flex;
		max-width: 100vw;
		width: 75vw;
		font-size: 3rem;
	}
	@media ${(props) => props.zenith.breakpoints.phone} {
		font-size: 2rem;
	}
`;