import styled from "styled-components";

export const MainLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
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