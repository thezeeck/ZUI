import styled from "styled-components";

export const IconContainer = styled.span`
  display: inline-block;
  text-align: center;
  ${({size}) => {
    let fontSize;
    if (size === "xs") fontSize = 1;
    if (size === "sm") fontSize = 2;
    if (size === "lg") fontSize = 4;
    if (size === "xl") fontSize = 6;
    else fontSize = 3;
    return `
      width: var(--ZUI-sizes_font_${fontSize});
      font-size: var(--ZUI-sizes_font_${fontSize});
    `;
  }}
`;