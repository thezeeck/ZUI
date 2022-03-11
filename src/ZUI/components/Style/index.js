import { createGlobalStyle } from "styled-components";
import { useThemeContext } from "../Theme";

export const Styles = () => {
  const { theme } = useThemeContext();
  return (<CSS theme={theme} />);
}

const CSS = createGlobalStyle`
  ${({theme}) => {
    let rules = "";
    console.log(theme);
    
    for (const key in theme) {
      if(typeof theme[key] !== "string") {
        for (const childKey in theme[key]) {
          rules += `--${key}_${childKey}: ${theme[key][childKey]};`;
        }
      }
    }
    
    return (`
      :root {
        ${rules}
      }
    `)
  }}
`;