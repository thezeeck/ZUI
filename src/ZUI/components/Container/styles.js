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
      padding: ${gap};
      width: 100%;
      box-sizing: border-box;
    }
  `}
`;