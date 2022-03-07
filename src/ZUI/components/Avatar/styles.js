import styled from "styled-components";

export const AvatarUI = styled.span`
  border: 0;
  display: inline-block;
  vertical-align: middle;
  width: ${({theme, size}) => theme.avatarSize[size]};
  height: ${({theme, size}) => theme.avatarSize[size]};
  overflow: hidden;
  position: relative;
  border-radius: ${({squared}) => squared ? "33%" : "50%"};
  transition: all .3s ease;
  font-size: ${({theme, size}) => theme.avatarSize[`font_${size}`]};
  cursor: ${({pointer}) => pointer ? "pointer" : "initial"};

  &.zoom:hover {

    figure {
      transform: scale(1.2);
    }

    .text {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  .background {
    background: ${({bgColor}) => bgColor};
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
    border-radius: ${({squared}) => squared ? "33%" : "50%"};
    box-sizing: border-box;
    ${({theme, bordered, borderWeight}) => bordered ? `
      width: calc(100% - (${theme.avatarSize["boder_" + borderWeight]} * 2));
      height: calc(100% - (${theme.avatarSize["boder_" + borderWeight]} * 2));
      border: .125rem solid ${theme.colors.secondaryDark};
      margin: ${theme.avatarSize["border_" + borderWeight]};
    ` : `
      width: 100%;
      height: 100%;
      border: 0 none;
      margin: 0;
    `}
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    color: ${({textColor}) => textColor ? textColor : "inherit"};
    transform: translate(-50%, -50%) scale(.8);
    transition: all .3s ease;
  }
`;