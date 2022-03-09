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
      margin: ${gap};
      width: calc(100% - (${gap} * 2));
      box-sizing: border-box;
    }
  `};
  padding: ${({gap}) => gap};
  box-sizing: border-box;
  ${({background}) => background && `
    background: ${background}
  `};
  ${({radius}) => radius && `
    border-radius: ${radius}
  `};
  ${({shadow, theme}) => shadow && `
    box-shadow: ${theme.shadows[shadow]}
  `};
`;