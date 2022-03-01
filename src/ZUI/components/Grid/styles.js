import styled from "styled-components";

export const GridContainer = styled.ul`
  --gap: ${({gap}) => gap};
  list-style: none;
  padding: var(--gap) calc(var(--gap) / 2);
  margin: 0;
  display: inline-flex;
  flex-wrap: ${({wrap}) => wrap};
  justify-content: ${({justify}) => justify};
  flex-direction: ${({direction}) => direction};
  align-items: ${({alignItems}) => alignItems};
  align-content: ${({alignContent}) => alignContent};
  width: 100%;
  box-sizing: border-box;
`;

export const GridItem = styled.li`
  width: ${({xs}) => `calc((${xs} / 12) * 100%)`};
  box-sizing: border-box;
  flex-grow: 0;
  padding: var(--gap) calc(var(--gap) / 2);
  display: ${({xs}) => xs === 0 ? "none" : "block"};

  @media (min-width: 650px) {
    width: ${({sm}) => `calc((${sm} / 12) * 100%)`};
    display: ${({sm}) => sm === 0 ? "none" : "block"};
  }

  @media (min-width: 1000px) {
    width: ${({md}) => `calc((${md} / 12) * 100%)`};
    display: ${({md}) => md === 0 ? "none" : "block"};
  }

  @media (min-width: 1200px) {
    width: ${({lg}) => `calc((${lg} / 12) * 100%)`};
    display: ${({lg}) => lg === 0 ? "none" : "block"};
  }

  @media (min-width: 1400px) {
    width: ${({xl}) => `calc((${xl} / 12) * 100%)`};
    display: ${({xl}) => xl === 0 ? "none" : "block"};
  }
`;