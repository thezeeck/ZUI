import { createContext, useContext, useState } from "react";
import { core } from "./coreTheme";

export const Theme = createContext();

export const ThemeProvider = ({ theme, children }) => {
  const currentTheme = useTheme(theme);
  return (
    <Theme.Provider value={ currentTheme }>
      {children}
    </Theme.Provider>
  )
};

export const useThemeContext = () => {
  return useContext(Theme);
};

function useTheme (userTheme) {
  const [theme, setTheme] = useState(userTheme ? userTheme : core);

  const setNewTheme = (theme, callback) => {
    setTheme(theme);
    if (callback) callback();
  }

  return { theme, setNewTheme };
}