import styled from "styled-components";

export const AvatarUI = styled.span`
  border: 0;
  display: inline-block;
  vertical-align: middle;
  width: ${({size}) => `var(--ZUI-avatar-size-${size})`};
  height: ${({size}) => `var(--ZUI-avatar-size-${size})`};
  overflow: hidden;
  position: relative;

  span {
    background: ${({color}) => color};
    display: block;
    height: 100%;
    width: 100%;
  }

  figure {
    margin: 0;
    line-height: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    position: absolute;
    left: 0;
    top: 0;
  }
`;