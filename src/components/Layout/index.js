import { GetTheme, Container } from "../../ZUI";
import { Aside } from "../Aside";
import { MainLayout } from "./styles";
import { Header } from "../Header";


export const Layout = ({ children }) => {
  const userTheme = GetTheme();
  return (
    <MainLayout theme={userTheme}>
      <Header />
      <Aside />
      <main>
        <Container flex direction="column" gap="1rem">
          {children}
        </Container>
      </main>
      <footer>footer</footer>
    </MainLayout>
  )
};