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

    secondary_Light: colorsSchema.orange100,
    secondary: colorsSchema.orange500,
    secondary_dark: colorsSchema.orange700,
    secondary_shadow: colorsSchema.orange900,

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
  },
  shadows: {
    xs: "0 .125rem .25rem",
    sm: "0 .25rem .5rem",
    md: "0 .5rem .75rem",
    lg: "0 .75rem 1rem",
    xl: "0 1rem 1.5rem",

    gray: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.gray100, .2)}`,
    primary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.blue100, .2)}`,
    secondary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.orange100, .2)}`,
  },
  sizes: {
    avatar_xs: "1rem",
    avatar_sm: "2rem",
    avatar_md: "3rem",
    avatar_lg: "4rem",
    avatar_xl: "5rem",

    border_xs: "0.0625rem",
    border_sm: "0.125rem",
    border_md: "0.25rem",
    border_lg: "0.375rem",
    border_xl: "0.5rem",

    font_xs: "0.625rem",
    font_sm: "1.25rem",
    font_md: "1.875rem",
    font_lg: "2.5rem",
    font_xl: "3.125rem",

    radius_xs: ".25rem",
    radius_sm: ".5rem",
    radius_md: ".75rem",
    radius_lg: "1rem",
    radius_xl: "1.25rem",
  },
  transitions: {
    slow: ".75s",
    regular: ".5s", 
    fast: ".25s"
  },
  name: "core",
  fonts: {
    sans: "'Roboto', 'Ubuntu', sans-serif",
    mono: "'Lucida Console', 'Liberation Mono', serif"
  }
}