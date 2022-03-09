import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";

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
    }
  },
  core
)