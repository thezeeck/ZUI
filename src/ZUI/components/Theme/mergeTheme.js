export const mergeTheme = (newTheme, baseTheme) => {
  const name = newTheme.name ? newTheme.name : baseTheme.name ? baseTheme.name : "newTheme";
  const colors = {...baseTheme.colors, ...newTheme.colors};
  const sizes = {...baseTheme.sizes, ...newTheme.sizes};
  const breakPoints = {...baseTheme.breakPoints, ...newTheme.breakPoints};
  const shadows = {...baseTheme.shadows, ...newTheme.shadows};
  const transitions = {...baseTheme.transitions, ...newTheme.transitions};
  
  return {
    name,
    colors,
    sizes,
    breakPoints,
    shadows,
    transitions,
  }
}