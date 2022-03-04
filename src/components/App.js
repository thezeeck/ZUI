import { ThemeProvider } from "../ZUI";
import { theme } from "../styles/theme";
import { Home } from "./Home";

export const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  )
};