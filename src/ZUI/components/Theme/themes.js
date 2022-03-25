import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";
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
      gray: colorsSchema.gray500,
      gray_1: colorsSchema.gray900,
      gray_2: colorsSchema.gray700,
      gray_3: colorsSchema.gray500,
      gray_4: colorsSchema.gray300,
      gray_5: colorsSchema.gray100,
    },
  },
  core
)