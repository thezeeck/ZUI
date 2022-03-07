import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "../ZUI";
import { theme } from "../styles/theme";
import { Routes } from './Routes';

export const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
};