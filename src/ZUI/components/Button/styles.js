import styled from "styled-components";
import { gradientOrColor } from "../../utils";

const calculateSizes = (size, auto) => {
  let sizes = {};
  if (size === "xs") sizes = {fs: 1, sp: 2, rd: "xs", wd: 2};
  if (size === "sm") sizes = {fs: 2, sp: 3, rd: "sm", wd: 4};
  if (size === "md") sizes = {fs: 3, sp: 4, rd: "md", wd: 6};
  if (size === "lg") sizes = {fs: 3, sp: 4, rd: "md", wd: 8};
  if (size === "xl") sizes = {fs: 4, sp: 5, rd: "lg", wd: 10};

  return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_${sizes.fs});
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_" + sizes.wd + ")"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_${sizes.rd});
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_${sizes.sp}) - (var(--ZUI-sizes_padding_${sizes.sp}) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_${sizes.sp}) + var(--ZUI-sizes_padding_${sizes.sp}));`;
}

const defineColors = ({color, disabled}) => {
  if (disabled) {
    return {
      font: "gray",
      bg: "gray_light",
    }
  }
  return {
    font: `${color.replace("gradients_", "")}_light`,
    bg: color,
  }
  
}

// padding: 0 var(--ZUI-sizes_padding_${sizes.weigth});

export const ButtonUI = styled.button`
  --content-bg: ${({color, variant}) => (/gradient/g.test(color) && variant === "outlined") ?
    "var(--ZUI-colors_background)" : "transparent"};
  ${({size, auto}) => calculateSizes(size, auto)}
  ${({margin}) => margin && `margin: var(--ZUI-sizes_padding_${margin})`};
  width: auto;
  display: inline-block;
  border: ${({color}) => /gradient/g.test(color) ? "0 none" : "2px solid"};
  padding: 0;
  position: relative;
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
  font-size: var(--ZUI-button-font-size);
  min-width: var(--ZUI-button-min-width);
  border-radius: var(--ZUI-button-border-radius);
  line-height: var(--ZUI-button-line-height);
  height: var(--ZUI-button-height);
  ${({color, theme, disabled, variant}) => {
    const colors = defineColors({color, theme, disabled});
    if (variant === "outlined") {
      return `
        background: transparent;
        color: var(--ZUI-colors_${color.replace("gradients_", "")});
      `;
    }
    return `
      background: ${ /gradient/g.test(color) ? "var(--ZUI-" + colors.bg + ")" : "var(--ZUI-colors_" + colors.bg + ")"};
      color: var(--ZUI-colors_${colors.font});
      border-color: var(--ZUI-colors_${colors.bg.replace("gradients_", "")});
    `;
  }};
  ${({color, shadow}) => shadow && `
    box-shadow: var(--ZUI-shadows_${color.replace("gradients_", "")}) ;
  `};

  :hover {
    ${({disabled, loading}) => {
      if (disabled !== undefined || loading !== undefined) return "opacity: 1;"
      return "opacity: .8;";
    }}
  }
`;

export const ButtonContentUI = styled.span`
  position: absolute;
  left: var(--ZUI-sizes_border_sm);
  top: var(--ZUI-sizes_border_sm);
  right: var(--ZUI-sizes_border_sm);
  bottom: var(--ZUI-sizes_border_sm);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--content-bg);
`;