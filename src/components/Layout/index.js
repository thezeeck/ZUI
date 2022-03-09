import { useGetTheme, Container } from "../../ZUI";
import { Aside } from "../Aside";
import { MainLayout } from "./styles";
import { Header } from "../Header";


export const Layout = ({ children }) => {
  const userTheme = useGetTheme();
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