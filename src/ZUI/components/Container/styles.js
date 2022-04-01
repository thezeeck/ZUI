import styled from "styled-components";

export const ContainerUI = styled.div`
  --gap: ${({gap}) => `var(--ZUI-sizes_padding_${gap})`};
  display: ${({flex, display}) => display ? display : flex ? "flex" : "block"};
  ${({flex, wrap, justify, direction, alignItems, alignContent, gap}) => flex && `
    flex-wrap:  ${wrap};
    justify-content: ${justify};
    flex-direction: ${direction};
    align-items: ${alignItems};
    align-content: ${alignContent};
  `};
  padding: var(--gap);
  box-sizing: border-box;
  ${({background}) => background && `
    background: var(--ZUI-colors_${background})
  `};
  ${({radius}) => radius && `
    border-radius: var(--ZUI-sizes_radius_${radius});
  `};
  ${({shadow}) => shadow && `
    box-shadow: var(--ZUI-shadows_${shadow});
  `};
  width: 100%;
`;

export const RowUI = styled.section`
  ${({size}) => {
    let width;
    if (typeof size === "number" && size <= 12) width = `calc((${size} / 12) * 100%)`;
    else if (size === "auto") width = "auto";
    else {
      width = "auto";
      console.error("Size property is not a valid value");
    }
    return `
      width: ${width};
      ${width === "auto" ? "max-width: fit-content;" : "overflow: auto;"}
    `;
  }};
  box-sizing: border-box;
`;