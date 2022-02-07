import styled from "styled-components";

export const MainLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.secondary_dark};
  color: ${props => props.theme.primary};
  font-family: sans-serif;

  header,
  footer {
    width: 100%;
  }

  aside {
    max-width: 20rem;
    width: 30%;
  }

  main {
    flex: 1;
  }
`;