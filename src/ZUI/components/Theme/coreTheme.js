import { colorsSchema } from "./colorsSchema";

export const core = {
  theme: {
    avatarSize: {
      avatar_size_xs: "1rem",
      avatar_size_sm: "2rem",
      avatar_size_md: "3rem",
      avatar_size_lg: "4rem",
      avatar_size_xl: "5rem",

      avatar_font_xs: "0.625rem",
      avatar_font_sm: "1.25rem",
      avatar_font_md: "1.875rem",
      avatar_font_lg: "2.5rem",
      avatar_font_xl: "3.125rem",

      avatar_border_light: "0.0625rem",
      avatar_border_normal: "0.125rem",
      avatar_border_bold: "0.25rem",
      avatar_border_extrabold: "0.375rem",
      avatar_border_black: "0.5rem",
    },
    colors: {
      text: "#000",
      background: "#fff",
      
      primaryLight: colorsSchema.blue300,
      primary: colorsSchema.blue500,
      primaryDark: colorsSchema.blue700,
      primaryShadow: colorsSchema.blue900,

      secondaryLight: colorsSchema.orange300,
      secondary: colorsSchema.orange500,
      secondaryDark: colorsSchema.orange300,
      secondaryShadow: colorsSchema.orange300,

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
    }
  }
}