import { MainLayout } from "./styles";
import { Header } from "../Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

export const App = () => (
  <ThemeProvider theme={theme} >
    <MainLayout>
      <Header />
      <aside>aside</aside>
      <main>main</main>
      <footer>footer</footer>
    </MainLayout>
  </ThemeProvider>
);