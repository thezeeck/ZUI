import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from "../ZUI";
import { Routes } from './Routes';
import { userTheme } from '../styles/theme';

export const App = () => {
  return (
    <ThemeProvider value={userTheme}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
};