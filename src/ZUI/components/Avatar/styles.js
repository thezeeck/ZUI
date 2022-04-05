import styled from "styled-components";
import { hexToRgba, gradientOrColor } from "../../utils";

export const AvatarUI = styled.span`
  border: 0;
  display: inline-block;
  vertical-align: middle;
  width: ${({size}) => `var(--ZUI-sizes_avatar_${size})`};
  height: ${({size}) => `var(--ZUI-sizes_avatar_${size})`};
  overflow: hidden;
  position: relative;
  border-radius: ${({squared}) => squared ? "var(--ZUI-sizes_radius_percentage_md)" : "var(--ZUI-sizes_radius_percentage_xl)"};
  transition: ${({transition}) => `all var(--ZUI-transitions_${transition}) ease`};
  font-size: ${({size}) => `var(--ZUI-sizes_font_${size})`};
  ${({pointer}) => pointer && `
    cursor: pointer;
  `}

  .background {
    background: ${({bgColor, theme, bordered, imgSrc}) => 
      !bordered && imgSrc ? "transparent" : bgColor ? gradientOrColor(bgColor) : hexToRgba(theme.colors.text, .1)};
    display: block;
    height: 100%;
    width: 100%;
  }

  figure {
    line-height: 0;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    transition: all .3s ease;
    border-radius: ${({squared}) => squared ? "var(--ZUI-sizes_radius_percentage_md)" : "var(--ZUI-sizes_radius_percentage_xl)"};
    box-sizing: border-box;

    &:hover {
      ${({zoom}) => zoom && `transform: scale(1.2);`}
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${({bordered, borderWeight}) => bordered ? `
      width: calc(100% - (var(--ZUI-sizes_border_${borderWeight}) * 2));
      height: calc(100% - (var(--ZUI-sizes_border_${borderWeight}) * 2));
      border: .125rem solid var(--ZUI-colors_background);
      margin: var(--ZUI-sizes_border_${borderWeight});
    ` : `
      width: 100%;
      height: 100%;
      border: 0 none;
      margin: 0;
    `};
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    ${({textColor}) => textColor && `
      color: ${textColor};
    `}
    transform: translate(-50%, -50%) scale(.8);
    transition: ${({transition}) => `all var(--ZUI-transitions_${transition}) ease`};

    &:hover {
      ${({zoom}) => zoom && `translate(-50%, -50%) scale(1);`}
    }
  }
`;