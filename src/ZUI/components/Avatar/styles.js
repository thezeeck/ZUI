import styled from "styled-components";

export const AvatarUI = styled.span`
  border: 0;
  display: inline-block;
  vertical-align: middle;
  width: ${({size}) => `var(--ZUI-avatar-size-${size})`};
  height: ${({size}) => `var(--ZUI-avatar-size-${size})`};
  overflow: hidden;
  position: relative;
  border-radius: ${({squared}) => squared ? "33%" : "50%"};
  transition: all .3s ease;
  font-size: ${({size}) => `var(--ZUI-avatar-font-${size})`};
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
    margin: ${({bordered, borderWeight}) => bordered ? `var(--ZUI-avatar-border-${borderWeight})` : 0};
    line-height: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: ${({bordered, borderWeight}) => bordered ? `calc(100% - (var(--ZUI-avatar-border-${borderWeight}) * 2))` : "100%"};
    height: ${({bordered, borderWeight}) => bordered ? `calc(100% - (var(--ZUI-avatar-border-${borderWeight}) * 2))` : "100%"};
    overflow: hidden;
    border-radius: ${({squared}) => squared ? "33%" : "50%"};
    box-sizing: border-box;
    border: ${({bordered}) => bordered ? ".125rem solid var(--secondary-dark)" : "0 none"};
    transition: all .3s ease;

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
    color: ${({textColor}) => textColor};
    transform: translate(-50%, -50%) scale(.8);
    transition: all .3s ease;
  }
`;