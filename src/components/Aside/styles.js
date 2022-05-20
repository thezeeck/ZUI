import styled from "styled-components";
import { hexToRgba } from "../../ZUI";

export const AsideUI = styled.aside`
  transition: all var(--ZUI-transitions_regular) ease;
	width: 100%;
	overflow: hidden;
	position: fixed;
	left: 0;
	top: 6rem;
	height: ${({menuStatus}) => menuStatus ? "calc(100% - 6rem)" : 0};
  background-color: ${({ theme }) => hexToRgba(theme.colors.background, .9)};
`;