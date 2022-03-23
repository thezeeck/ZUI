import { useThemeContext, Container } from "../../ZUI";
import { Aside } from "../Aside";
import { MainLayout } from "./styles";
import { Header } from "../Header";


export const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <MainLayout theme={theme}>
      <Header />
      <Aside />
      <main>
        <Container flex direction="column" gap={4}>
          {children}
        </Container>
      </main>
      <footer>footer</footer>
    </MainLayout>
  )
};