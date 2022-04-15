import styled from "styled-components";

export const InputContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  vertical-align: bottom;

  > input {
    background: var(--ZUI-colors_gray_1);
    padding: 0 var(--ZUI-sizes_spacing_3);
    display: inline-block;
    box-sizing: border-box;
    transition: all var(--ZUI-transitions_fast);
    ${({size, rounded}) => {
      let sizes = {};
      if (size === "xs") sizes = {fs: 1, rd: "xs", wd: 4};
      else if (size === "sm") sizes = {fs: 2, rd: "sm", wd: 5};
      else if (size === "lg") sizes = {fs: 3, rd: "md", wd: 8};
      else if (size === "xl") sizes = {fs: 4, rd: "lg", wd: 10};
      else sizes = {fs: 3, rd: "md", wd: 6};
      return `
        font-size: var(--ZUI-sizes_font_${sizes.fs});
        width: var(--ZUI-sizes_space_${sizes.wd});
        border-radius: var(--ZUI-sizes_radius_${rounded ? "xl" : sizes.rd});
        height: var(--ZUI-sizes_button_height_${size});`
    }}
    ${({color, variant}) => {
      if (variant === "shadow") {
        return `
          border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_gray_3);`
      }
    }};
    color: var(--ZUI-colors_text);

    /* &::placeholder {
      color: transparent;
    } */

    &:focus-visible {
      outline: currentcolor none medium;
      box-shadow: 0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_primary);
    }

    &:disabled {
      opacity: .4;
      cursor: not-allowed;
      user-select: none;
    }
  }
`;

export const LabelUI = styled.span`
  margin-bottom: var(--ZUI-sizes_spacing_4);
  display: inline-block;
`;