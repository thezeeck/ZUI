import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";
import { colorsSchema } from "./colorsSchema";
import { hexToRgba } from "../../utils";

export const CreateTheme = (theme, base) => {
  return mergeTheme(theme, base ? base : core);
}

export const lightTheme = CreateTheme(
  {
    name: "light",
    colors: {
      text: "#000",
      background: "#fff",
    }
  },
  core
);

export const darkTheme = CreateTheme(
  {
    name: "dark",
    colors: {
      text: "#fff",
      background: "#24242D",
      gray: colorsSchema.gray500,
      gray_1: colorsSchema.gray900,
      gray_2: colorsSchema.gray700,
      gray_3: colorsSchema.gray500,
      gray_4: colorsSchema.gray300,
      gray_5: colorsSchema.gray100,
    },
    shadows: {
      gray: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.gray900, .5)}`,
      primary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.blue900, .5)}`,
      secondary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.purple900, .5)}`,
      success: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.green900, .5)}`,
      warning: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.yellow900, .5)}`,
      error: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.red900, .5)}`,

      gray_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.gray900, .5)}`,
      primary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.blue900, .5)}`,
      secondary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.purple900, .5)}`,
      success_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.green900, .5)}`,
      warning_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.yellow900, .5)}`,
      error_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.red900, .5)}`,
    },
  },
  core
)