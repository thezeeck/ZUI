import { createGlobalStyle } from "styled-components";
import { useThemeContext } from "../Theme";

export const Styles = () => {
  const { theme } = useThemeContext();
  return (<CSS theme={theme} />);
}

const CSS = createGlobalStyle`
  ${({theme}) => {
    let rules = "";

    for (const key in theme) {
      if(typeof theme[key] !== "string") {
        for (const childKey in theme[key]) {
          rules += `--ZUI-${key}_${childKey}: ${theme[key][childKey]};`;
        }
      }
    }
    
    return (`
      :root {
        ${rules}
      }

      body {
        font-family: var(--ZUI-fonts_sans);
      }

      @keyframes ZUI-loading-type1 {
        0% {
          transform: translate(0px, 150%);
        }
        50% {
          transform: translate(300%, 150%);
        }
        99% {
          transform: translate(0px, 150%);
        }
      }

      @keyframes ZUI-loading-type2 {
        0% {
          opacity: 1;
        }
        50% {
          opacity: .2;
        }
        99% {
          opacity: .9;
        }
      }

      @keyframes ZUI-loading-type3a {
        0% {
          transform: translate(700%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(700%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(700%, 150%);
          opacity: .5;
        }
      }

      @keyframes ZUI-loading-type3b {
        0% {
          transform: translate(945%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(945%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(945%, 150%);
          opacity: .5;
        }
      }

      @keyframes ZUI-loading-type3c {
        0% {
          transform: translate(1190%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(1190%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(1190%, 150%);
          opacity: .5;
        }
      }
    `)
  }}
`;