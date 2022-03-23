import { colorsSchema } from "./colorsSchema";
import { hexToRgba } from "../../utils";

export const core = {
  break_points: {
    sm: "650px",
    md: "1000px",
    lg: "1200px",
    xl: "1400px",
  },
  colors: {
    ...colorsSchema,
    text: "#000",
    background: "#fff",
    
    primary_light: colorsSchema.blue300,
    primary: colorsSchema.blue500,
    primary_dark: colorsSchema.blue700,
    primary_shadow: colorsSchema.blue900,

    secondary_Light: colorsSchema.purple300,
    secondary: colorsSchema.purple500,
    secondary_dark: colorsSchema.purple700,
    secondary_shadow: colorsSchema.purple900,

    success_light: colorsSchema.green300,
    success: colorsSchema.green500,
    success_dark: colorsSchema.green700,
    success_shadow: colorsSchema.green900,

    warning_light: colorsSchema.yellow300,
    warning: colorsSchema.yellow500,
    warning_dark: colorsSchema.yellow700,
    warning_shadow: colorsSchema.yellow900,

    error_light: colorsSchema.red300,
    error: colorsSchema.red500,
    error_dark: colorsSchema.red700,
    error_shadow: colorsSchema.red900,

    gray_light: colorsSchema.gray900,
    gray: colorsSchema.gray700,
    gray_dark: colorsSchema.gray500,
    gray_shadow: colorsSchema.gray200,
  },
  shadows: {
    xs: "0 .125rem .25rem",
    sm: "0 .25rem .5rem",
    md: "0 .5rem .85rem",
    lg: "0 .75rem 1rem",
    xl: "0 1rem 1.5rem",

    gray: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.gray500, .7)}`,
    primary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.blue500, .7)}`,
    secondary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.purple500, .7)}`,
    success: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.green500, .7)}`,
    warning: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.yellow500, .7)}`,
    error: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.red500, .7)}`,
  },
  sizes: {
    avatar_xs: "1rem",
    avatar_sm: "2rem",
    avatar_md: "3rem",
    avatar_lg: "4rem",
    avatar_xl: "5rem",

    border_xs: ".0625rem",
    border_sm: ".125rem",
    border_md: ".25rem",
    border_lg: ".375rem",
    border_xl: ".5rem",

    font_1: ".75rem",
    font_2: ".85rem",
    font_3: "1rem",
    font_4: "1.5rem",
    font_5: "2.5rem",
    font_6: "3rem",

    radius_xs: ".25rem",
    radius_sm: ".5rem",
    radius_md: ".75rem",
    radius_lg: "1rem",
    radius_xl: "1.25rem",

    padding_1: ".25rem",
    padding_2: ".5rem",
    padding_3: ".75rem",
    padding_4: "1rem",
    padding_5: "1.5rem",
    padding_6: "2rem",

    space_0: "0rem",
    space_1: "2rem",
    space_2: "4rem",
    space_3: "6rem",
    space_4: "8rem",
    space_5: "10rem",
    space_6: "12rem",
    space_7: "14rem",
    space_8: "16rem",
    space_9: "18rem",
    space_10: "20rem",
  },
  transitions: {
    slow: ".75s",
    regular: ".5s", 
    fast: ".25s"
  },
  name: "core",
  fonts: {
    sans: "'Roboto', 'Ubuntu', sans-serif",
    mono: "'Lucida Console', 'Liberation Mono', serif",
  },
  gradients: {
    primary: "linear-gradient(135deg, var(--ZUI-colors_primary) 0%, var(--ZUI-colors_primary_shadow) 100%)",
    secondary: "linear-gradient(135deg, var(--ZUI-colors_secondary) 0%, var(--ZUI-colors_secondary_shadow) 100%)",
    success: "linear-gradient(135deg, var(--ZUI-colors_success) 0%, var(--ZUI-colors_success_shadow) 100%)",
    warning: "linear-gradient(135deg, var(--ZUI-colors_warning) 0%, var(--ZUI-colors_warning_shadow) 100%)",
    error: "linear-gradient(135deg, var(--ZUI-colors_error) 0%, var(--ZUI-colors_error_shadow) 100%)",
  }
}