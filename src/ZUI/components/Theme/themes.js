import { core } from "./coreTheme"

export const darkTheme = {
  ...core,
  type: "light",
  theme: {
    colors: {
      secondary: "#fff",
    }
  }
}

export const lightTheme = {
  ...core,
  type: "dark",
  theme: {
    colors: {
      secondary: "#000",
    }
  }
}

export const CreateTheme = theme => {
  return {
    ...core,
    theme
  }
}
