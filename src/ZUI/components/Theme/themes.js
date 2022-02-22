const core = {
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
      secondary: "#fff",
      secondaryDark: "#000a11",
    }
  }
}

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
