import { useThemeContext, Container } from "../../ZUI";
import { MainLayout, MainUI } from "./styles";
import { Header } from "../Header";
import { useState } from "react";


export const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  const [ menuStatus, setMenuStatus ] = useState(false);
  const handleChangeMenuStatus = () => {
    setMenuStatus(!menuStatus);
  }

  return (
    <MainLayout theme={theme}>
      <Header menuStatus={menuStatus} handleClick={handleChangeMenuStatus} />
      <MainUI menuStatus={menuStatus}>
        <Container flex direction="column" gap={4}>
          {children}
        </Container>
      </MainUI>
      <footer>footer</footer>
    </MainLayout>
  )
};