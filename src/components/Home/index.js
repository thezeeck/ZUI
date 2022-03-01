import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Aside } from "../Aside";
import { Main } from "../Main";
import { MainLayout } from "./styles";
import { Header } from "../Header";


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