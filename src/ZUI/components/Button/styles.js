import styled from "styled-components";
import { gradientOrColor } from "../../utils";

const calculateSizes = (size, auto) => {
  if (size === "xs") return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_1);
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_2)"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_xs);
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_2) - (var(--ZUI-sizes_padding_2) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_2) + var(--ZUI-sizes_padding_2));`;
  if (size === "sm") return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_2);
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_4)"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_sm);
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_3) - (var(--ZUI-sizes_padding_3) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_3) + var(--ZUI-sizes_padding_3));`;
  if (size === "lg") return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_3);
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_8)"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_md);
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_4) - (var(--ZUI-sizes_padding_4) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_4) + var(--ZUI-sizes_padding_4));`;
  if (size === "xl") return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_4);
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_10)"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_lg);
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_5) - (var(--ZUI-sizes_padding_5) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_5) + var(--ZUI-sizes_padding_5));`;
  return `
    --ZUI-button-font-size: var(--ZUI-sizes_font_3);
    --ZUI-button-min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_6)"};
    --ZUI-button-border-radius: var(--ZUI-sizes_radius_md);
    --ZUI-button-line-height: calc(var(--ZUI-sizes_font_4) - (var(--ZUI-sizes_padding_4) * 2));
    --ZUI-button-height: calc(var(--ZUI-sizes_font_4) + var(--ZUI-sizes_padding_4));`;
}

const defineColors = ({color, theme, disabled}) => {
  if (disabled) {
    return {
      font: theme.colors.gray,
      bg: theme.colors.gray_light,
    }
  }
  return {
    font: "#fff",
    bg: gradientOrColor(color),
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
  border: 0 none;
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
        background: ${colors.bg};
        color: ${colors.font};
      `;
    }
    return `
      background: ${colors.bg};
      color: ${colors.font};
      border-color: ${colors.bg};
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