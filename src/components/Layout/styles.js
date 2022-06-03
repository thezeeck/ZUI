import styled from "styled-components";

export const MainLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
  font-family: sans-serif;
  width: clamp(90%, 1000px, calc(80ch + 200px));
  margin: 0 auto;
  position: relative;

  header,
  footer {
    width: 100%;
  }

  main {
    width: clamp(250px, 90%, 80ch);
    margin: 0 auto;
  }
`;

export const MainUI = styled.main`
  transition: all var(--ZUI-transitions_slow) ease;
  filter: blur(${({menuStatus}) => menuStatus ? "5px" : 0});
`;