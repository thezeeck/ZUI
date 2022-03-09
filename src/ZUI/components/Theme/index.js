import { createContext, useContext, useState } from "react";
import { core } from "./coreTheme";

export const Theme = createContext(core);

export const ThemeProvider = ({theme, children}) => {
  const [userTheme, setTheme] = useState(theme);
  return (
    <Theme.Provider value={{userTheme, setTheme}}>
      {children}
    </Theme.Provider>
  )
};

export const useGetTheme = () => {
  const { userTheme } = useContext(Theme);
  return userTheme;
};

export const useSetTheme = (newTheme) => {
  const { setTheme } = useContext(Theme);
  return setTheme(newTheme);
}