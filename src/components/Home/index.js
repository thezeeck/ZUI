import { GetTheme } from "../../ZUI";
import { Aside } from "../Aside";
import { Main } from "../Main";
import { MainLayout } from "./styles";
import { Header } from "../Header";


export const Home = () => {
  const userTheme = GetTheme();
  return (
    <MainLayout theme={userTheme}>
      <Header />
      <Aside />
      <Main />
      <footer>footer</footer>
    </MainLayout>
  )
};