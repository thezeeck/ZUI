import styled from "styled-components";

export const ContainerUI = styled.div`
  display: ${({flex, display}) => display ? display : flex ? "flex" : "block"};
  ${({flex, wrap, justify, direction, alignItems, alignContent, gap}) => flex && `
    flex-wrap:  ${wrap};
    justify-content: ${justify};
    flex-direction: ${direction};
    align-items: ${alignItems};
    align-content: ${alignContent};

    > * {
      margin: var(--ZUI-sizes_padding_${gap});
      width: calc(100% - (var(--ZUI-sizes_padding_${gap}) * 2));
      box-sizing: border-box;
    }
  `};
  padding: ${({gap}) => `var(--ZUI-sizes_padding_${gap})`};
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
`;