export const mergeTheme = (newTheme, baseTheme) => {
  const name = newTheme.name ? newTheme.name : baseTheme.name ? baseTheme.name : "newTheme";
  const colors = {...baseTheme.colors, ...newTheme.colors};
  const sizes = {...baseTheme.sizes, ...newTheme.sizes};
  const break_points = {...baseTheme.break_points, ...newTheme.break_points};
  const shadows = {...baseTheme.shadows, ...newTheme.shadows};
  const transitions = {...baseTheme.transitions, ...newTheme.transitions};
  const fonts = {...baseTheme.fonts, ...newTheme.fonts};
  const gradients = {...baseTheme.gradients, ...newTheme.gradients};
  
  return {
    name,
    colors,
    sizes,
    break_points,
    shadows,
    transitions,
    fonts,
    gradients,
  }
}