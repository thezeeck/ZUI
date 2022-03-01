import { createContext, useContext, useState } from "react";
import { core } from "./coreTheme";

export const Theme = createContext(core);

export const ThemeProvider = ({theme, children}) => {
  const [newTheme, setTheme] = useState(theme);
  return (
    <Theme.Provider value={[newTheme, setTheme]}>
      {children}
    </Theme.Provider>
  )
};

export const GetTheme = () => {
  const [ theme ] = useContext(Theme);
  return theme;
};

export const SetTheme = (newTheme) => {
  const [ _, setTheme ] = useContext(Theme);
  return setTheme(newTheme);
}