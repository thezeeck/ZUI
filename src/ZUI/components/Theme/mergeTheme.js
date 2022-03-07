export const mergeTheme = (newTheme, baseTheme) => {
  const name = newTheme.name ? newTheme.name : baseTheme.name ? baseTheme.name : "newTheme";
  const colors = {...baseTheme.colors, ...newTheme.colors};
  const avatarSize = {...baseTheme.avatarSize, ...newTheme.avatarSize}
  const breakPoints = {...baseTheme.breakPoints, ...newTheme.breakPoints}
  
  return {
    name,
    colors,
    avatarSize,
    breakPoints
  }
}