import { CreateTheme, darkTheme, hexToRgba, colorsSchema } from "../ZUI";

export const userTheme = CreateTheme({
  colors: {
    background: "#000A11"
  },
  shadows: {
    primary: `0 .5rem .75rem ${hexToRgba(colorsSchema.blue100, .2)}`,
  },
  name: "userTheme",

}, darkTheme);