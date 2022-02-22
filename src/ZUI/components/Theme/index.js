import { createContext } from "react";

export const Theme = createContext({});

export const ThemeProvider = ({theme, children}) => (
  <Theme.Provider value={theme}>
    {children}
  </Theme.Provider>
);
