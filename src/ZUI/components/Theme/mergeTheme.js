export const mergeTheme = (newTheme, baseTheme) => {
  const type = newTheme.type ? newTheme.type : baseTheme.type ? baseTheme.type : "newTheme";
  const colors = {...baseTheme?.theme?.colors, ...newTheme?.theme?.colors};
  const avatarSize = {...baseTheme?.theme?.avatarSize, ...newTheme?.theme?.avatarSize}
  const breakPoints = {...baseTheme?.theme?.breakPoints, ...newTheme?.theme?.breakPoints}
  
  return {
    type,
    theme: {
      colors,
      avatarSize,
      breakPoints
    }
  }
}