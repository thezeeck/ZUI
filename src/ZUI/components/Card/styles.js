import styled from "styled-components";

export const CardUI = styled.div`
  padding: ${({gap}) => `var(--ZUI-sizes_spacing_${gap});`}
  ${({variant, color}) => {
    if (variant === "bordered") {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_1);
        border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_3);`;
    } else if (variant === "dense") {
      return `
        background-color: var(--ZUI-colors_${color}_1);`
    } else {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_1);
        box-shadow: var(--ZUI-shadows_${color})};`
    }
  }}
  ${({pointer}) => pointer && `cursor: pointer;`}
`;