import styled from "styled-components";
import { hexToRgba } from "../../utils";

export const AnchorUI = styled.a`
  text-decoration: none;
  color: ${({textColor}) => textColor ? `var(--ZUI-colors_${textColor})` : "var(--ZUI-colors_primary)"};
  ${({box}) => box && `
    display: inline-block;
    padding: var(--ZUI-sizes_border_sm) var(--ZUI-sizes_border_lg);
    background-color: transparent;
    border-radius: var(--ZUI-sizes_radius_sm);
  `}

  &:hover {
    text-decoration: ${({decoration}) => decoration ? "underline" : "none"};
    color: ${({textColor, theme}) => textColor ?
      hexToRgba(theme.colors[textColor], .8) :
      hexToRgba(theme.colors.primary,  .8)};
    ${({box, textColor, theme}) => box && `
      background-color: ${textColor ?
        hexToRgba(theme.colors[textColor], .2) :
        hexToRgba(theme.colors.primary,  .2)};
      border-radius: var(--ZUI-sizes_radius_sm);
    `}
  }

  &:focus-visible {
    outline: currentcolor none medium;
    box-shadow: ${({textColor}) => `0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${textColor.replace("gradients_", "")})`};
  }
`;

export const IconWrapper = styled.span`
  margin-left: var(--ZUI-sizes_spacing_2);
`;