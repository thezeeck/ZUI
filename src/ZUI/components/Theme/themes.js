import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";
import { hexToRgba } from "../../utils";
import { colorsSchema } from "./colorsSchema";

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
      background: "#000",
      gray_light: colorsSchema.gray200,
      gray: colorsSchema.gray500,
      gray_dark: colorsSchema.gray700,
      gray_shadow: colorsSchema.gray900,
    },
  },
  core
)