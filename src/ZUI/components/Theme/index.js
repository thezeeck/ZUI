import { createContext, useContext, useState } from "react";
import { core } from "./coreTheme";

export const Theme = createContext(core);

export const ThemeProvider = ({thm, children}) => {
  const [theme, setTheme] = useState(thm);
  return (
    <Theme.Provider value={{theme, setTheme}}>
      {children}
    </Theme.Provider>
  )
};

export const GetTheme = () => {
  const { theme } = useContext(Theme);
  return theme;
};

export const SetTheme = (newTheme) => {
  const { setTheme } = useContext(Theme);
  return setTheme(newTheme);
}