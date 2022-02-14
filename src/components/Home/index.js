import { MainLayout } from "./styles";
import { Header } from "../Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Aside } from "../Aside";
import { Main } from "../Main";

export const App = () => (
  <ThemeProvider theme={theme} >
    <MainLayout>
      <Header />
      <Aside />
      <Main />
      <footer>footer</footer>
    </MainLayout>
  </ThemeProvider>
);