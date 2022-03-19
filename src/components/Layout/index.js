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
        <Container flex direction="column" gap="1rem">
          {children}
        </Container>
      </main>
      <footer>footer</footer>
    </MainLayout>
  )
};