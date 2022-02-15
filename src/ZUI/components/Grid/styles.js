import styled from "styled-components";

export const GridContainer = styled.ul`
  --gap: ${({gap}) => gap};
  list-style: none;
  padding: 1rem;
  margin: 0;
  gap: var(--gap);
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
  max-width: ${({xs}) => `calc(((${xs} / 12) * 100%) - var(--gap))`};
  box-sizing: border-box;
  flex: 1 1 auto;
`;