import { colorsSchema } from "./colorsSchema";
import { hexToRgba } from "../../utils";

export const core = {
  sizes: {
    avatar_xs: "1rem",
    avatar_sm: "2rem",
    avatar_md: "3rem",
    avatar_lg: "4rem",
    avatar_xl: "5rem",

    avatar_font_xs: "0.625rem",
    avatar_font_sm: "1.25rem",
    avatar_font_md: "1.875rem",
    avatar_font_lg: "2.5rem",
    avatar_font_xl: "3.125rem",

    avatar_border_xs: "0.0625rem",
    avatar_border_sm: "0.125rem",
    avatar_border_md: "0.25rem",
    avatar_border_lg: "0.375rem",
    avatar_border_xl: "0.5rem",
  },
  breakPoints: {
    sm: "650px",
    md: "1000px",
    lg: "1200px",
    xl: "1400px",
  },
  colors: {
    text: "#000",
    background: "#fff",
    
    primaryLight: colorsSchema.blue300,
    primary: colorsSchema.blue500,
    primaryDark: colorsSchema.blue700,
    primaryShadow: colorsSchema.blue900,

    secondaryLight: colorsSchema.orange100,
    secondary: colorsSchema.orange500,
    secondaryDark: colorsSchema.orange700,
    secondaryShadow: colorsSchema.orange900,

    successLight: colorsSchema.green300,
    success: colorsSchema.green500,
    successDark: colorsSchema.green700,
    successShadow: colorsSchema.green900,

    warningLight: colorsSchema.yellow300,
    warning: colorsSchema.yellow500,
    warningDark: colorsSchema.yellow700,
    warningShadow: colorsSchema.yellow900,

    errorLight: colorsSchema.red300,
    error: colorsSchema.red500,
    errorDark: colorsSchema.red700,
    errorShadow: colorsSchema.red900,
  },
  shadows: {
    gray: `0 .5rem .75rem ${hexToRgba(colorsSchema.gray100, .2)}`,
    primary: `0 .5rem .75rem ${hexToRgba(colorsSchema.blue100, .2)}`,
    secondary: `0 .5rem .75rem ${hexToRgba(colorsSchema.orange100, .2)}`,
  },
  transitions: {
    slow: .75,
    regular: .5,
    fast: .25,

    avatar: "regular",
  },
  name: "core",
}