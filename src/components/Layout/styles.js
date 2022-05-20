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

  main {
    width: 70%;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export const MainUI = styled.main`
  transition: all var(--ZUI-transitions_slow) ease;
  filter: blur(${({menuStatus}) => menuStatus ? "5px" : 0});
`;