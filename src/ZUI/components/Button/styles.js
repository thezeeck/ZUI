import styled from "styled-components";
import { gradientOrColor } from "../../utils";

export const ButtonUI = styled.button`
  margin: ${({margin}) => margin};
  width: auto;
  display: inline-block;
  border: 0 none;
  cursor: ${({disabled}) => disabled ? "not-allowed" : "pointer"};
  ${({size, auto}) => {
    let sizes;
    switch (size) {
      case "xs": sizes = {weigth: 1, width: auto ? "auto" : 2, radius: "xs"}
      break;
      case "sm": sizes = {weigth: 2, width: auto ? "auto" : 4, radius: "sm"}
      break;
      case "md": sizes = {weigth: 3, width: auto ? "auto" : 6, radius: "md"}
      break;
      case "lg": sizes = {weigth: 3, width: auto ? "auto" : 8, radius: "md"}
      break;
      case "xl": sizes = {weigth: 4, width: auto ? "auto" : 10, radius: "lg"}
      break;
      default: sizes = {weigth: 3, width: auto ? "auto" : 6}
      break;
    }
    return `
    font-size: var(--ZUI-sizes_font_${sizes.weigth});
    padding: 0 var(--ZUI-sizes_padding_${sizes.weigth});
    min-width: var(--ZUI-sizes_space_${sizes.width});
    border-radius: var(--ZUI-sizes_radius_${sizes.radius});
    line-height: calc(var(--ZUI-sizes_font_${sizes.weigth + 1}) + var(--ZUI-sizes_padding_${sizes.weigth}));
    height: calc(var(--ZUI-sizes_font_${sizes.weigth + 1}) + var(--ZUI-sizes_padding_${sizes.weigth}));
    `;
  }}
  ${({color, theme, disabled, shadow}) => {
    let colors = {
      font: disabled ? theme.colors.gray : color === "transparent" ? theme.colors.primary : "#fff",
      bg: disabled ? theme.colors.gray_light : color === "transparent" ? "transparent" : gradientOrColor(color),
    }
    
    return `
      background: ${colors.bg};
      color: ${colors.font};
      box-shadow: ${shadow ? "var(--ZUI-shadows_" + color.replace("gradients_", "") + ")" : "none"}
    `;
  }};

  :hover {
    ${({disabled, loading}) => {
      console.log("disabled", disabled, "loading", loading);
      if (disabled !== undefined || loading !== undefined) return "opacity: 1;"
      return "opacity: .8;";
    }}
  }
`;