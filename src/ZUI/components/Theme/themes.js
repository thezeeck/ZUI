import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";

export const CreateTheme = (theme, base) => {
  return mergeTheme(theme, base ? base : core);
}

export const lightTheme = CreateTheme(
  {
    type: "light",
    colors: {
      text: "#000",
      background: "#fff",
    }
  },
  core
);

export const darkTheme = CreateTheme(
  {
    type: "dark",
    colors: {
      text: "#fff",
      background: "#000",
    }
  },
  core
)