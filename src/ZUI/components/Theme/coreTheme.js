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
    
    primary: colorsSchema.blue500,
    primary_1: colorsSchema.blue100,
    primary_2: colorsSchema.blue300,
    primary_3: colorsSchema.blue500,
    primary_4: colorsSchema.blue700,
    primary_5: colorsSchema.blue900,

    secondary: colorsSchema.purple500,
    secondary_1: colorsSchema.purple100,
    secondary_2: colorsSchema.purple300,
    secondary_3: colorsSchema.purple500,
    secondary_4: colorsSchema.purple700,
    secondary_5: colorsSchema.purple900,

    success: colorsSchema.green500,
    success_1: colorsSchema.green100,
    success_2: colorsSchema.green300,
    success_3: colorsSchema.green500,
    success_4: colorsSchema.green700,
    success_5: colorsSchema.green900,

    warning: colorsSchema.yellow500,
    warning_1: colorsSchema.yellow100,
    warning_2: colorsSchema.yellow300,
    warning_3: colorsSchema.yellow500,
    warning_4: colorsSchema.yellow700,
    warning_5: colorsSchema.yellow900,

    error: colorsSchema.red500,
    error_1: colorsSchema.red100,
    error_2: colorsSchema.red300,
    error_3: colorsSchema.red500,
    error_4: colorsSchema.red700,
    error_5: colorsSchema.red900,

    gray: colorsSchema.gray400,
    gray_1: colorsSchema.gray100,
    gray_2: colorsSchema.gray200,
    gray_3: colorsSchema.gray400,
    gray_4: colorsSchema.gray600,
    gray_5: colorsSchema.gray800,
  },
  shadows: {
    xs: "0 .125rem .25rem",
    sm: "0 .25rem .5rem",
    md: "0 .5rem .85rem",
    lg: "0 .5rem 1rem",
    xl: "0 .75rem 2rem",

    gray_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.gray500, .5)}`,
    primary_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.blue500, .5)}`,
    secondary_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.purple500, .5)}`,
    success_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.green500, .5)}`,
    warning_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.yellow500, .5)}`,
    error_sm: `var(--ZUI-shadows_sm) ${hexToRgba(colorsSchema.red500, .5)}`,

    gray: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.gray900, .25)}`,
    primary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.blue900, .25)}`,
    secondary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.purple900, .25)}`,
    success: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.green900, .25)}`,
    warning: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.yellow900, .25)}`,
    error: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.red900, .25)}`,

    gray_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.gray900, .25)}`,
    primary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.blue900, .25)}`,
    secondary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.purple900, .25)}`,
    success_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.green900, .25)}`,
    warning_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.yellow900, .25)}`,
    error_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.red900, .25)}`,
  },
  sizes: {
    avatar_xs: "1rem",
    avatar_sm: "2rem",
    avatar_md: "3rem",
    avatar_lg: "4rem",
    avatar_xl: "5rem",

    border_xs: ".063rem",
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

    radius_percentage_xs: "10%",
    radius_percentage_sm: "20%",
    radius_percentage_md: "30%",
    radius_percentage_lg: "40%",
    radius_percentage_xl: "50%",

    spacing_0: "0px",
    spacing_1: ".25rem",
    spacing_2: ".5rem",
    spacing_3: ".75rem",
    spacing_4: "1rem",
    spacing_5: "1.5rem",
    spacing_6: "2rem",

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
    primary: "linear-gradient(135deg, var(--ZUI-colors_primary) 0%, var(--ZUI-colors_primary_5) 100%)",
    secondary: "linear-gradient(135deg, var(--ZUI-colors_secondary) 0%, var(--ZUI-colors_secondary_5) 100%)",
    success: "linear-gradient(135deg, var(--ZUI-colors_success) 0%, var(--ZUI-colors_success_5) 100%)",
    warning: "linear-gradient(135deg, var(--ZUI-colors_warning) 0%, var(--ZUI-colors_warning_5) 100%)",
    error: "linear-gradient(135deg, var(--ZUI-colors_error) 0%, var(--ZUI-colors_error_5) 100%)",
  }
}