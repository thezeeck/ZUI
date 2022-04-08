import styled from "styled-components";
import { hexToRgba } from "../../utils";

export const CardUI = styled.div`
  padding: ${({gap}) => `var(--ZUI-sizes_spacing_${gap})`};
  ${({color}) => color !== "gray" && "color: #fff;"}
  ${({variant, color}) => {
    const tone = color === "gray" ? [1,3] : [3,4];
    if (variant === "bordered") {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_${tone[0]});
        border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_${tone[1]});`;
    } else if (variant === "dense") {
      return `
        background-color: var(--ZUI-colors_${color}_${tone[0]});`
    } else {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_${tone[0]});
        ${color === "gray" && "box-shadow: var(--ZUI-shadows_" + color + ");"}`
    }
  }}
  ${({pointer}) => pointer && `cursor: pointer;`}
  overflow: hidden;
  position: relative;
`;

export const HeaderUI = styled.header`
  margin: ${({state}) => `calc(var(--ZUI-sizes_spacing_${state.gap}) * -1) calc(var(--ZUI-sizes_spacing_${state.gap}) * -1) var(--ZUI-sizes_spacing_${state.gap + 1})`};
  padding: ${({state}) => `var(--ZUI-sizes_spacing_${state.gap})`};
  ${({state, theme}) => {
    if (state.bordered) return `border-bottom: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${state.color}_3);`;
    if (state.ghost) return `background-color: ${hexToRgba(theme.colors.gray_5, .05)}`
  }}

`;

export const FooterUI = styled.footer`
  margin: ${({state}) => `var(--ZUI-sizes_spacing_${state.gap + 1}) calc(var(--ZUI-sizes_spacing_${state.gap}) * -1) calc(var(--ZUI-sizes_spacing_${state.gap}) * -1)`};
  padding: ${({state}) => `var(--ZUI-sizes_spacing_${state.gap})`};
  ${({state, theme}) => {
    if (state.bordered) return `border-top: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${state.color}_3);`;
    if (state.ghost) return `background-color: ${hexToRgba(theme.colors.gray_5, .05)}`
  }}
`;