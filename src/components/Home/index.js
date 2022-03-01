import { ThemeProvider } from "../../ZUI";
import { theme } from "../../styles/theme";
import { Aside } from "../Aside";
import { Main } from "../Main";
import { MainLayout } from "./styles";
import { Header } from "../Header";


export const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme} >
      <MainLayout>
        <Header />
        <Aside />
        <Main />
        <footer>footer</footer>
      </MainLayout>
    </ThemeProvider>
  )
};