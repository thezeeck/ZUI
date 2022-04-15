import styled from "styled-components";

export const InputContainer = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;

  > input {
    background: var(--ZUI-colors_gray_1);
    padding: var(--ZUI-sizes_spacing_3) var(--ZUI-sizes_spacing_3) 0;
    border-radius: var(--ZUI-sizes_radius_md);
    font-size: var(--ZUI-sizes_font_3);
    line-height: calc(var(--ZUI-sizes_font_4) - (var(--ZUI-sizes_spacing_4) * 2));
    height: calc(var(--ZUI-sizes_font_4) + var(--ZUI-sizes_spacing_4));
    box-sizing: border-box;
    ${({color, variant}) => {
      if (variant === "shadow") {
        return `
          border: var(--ZUI-sizes_border_xs) solid var(--ZUI-colors_gray_1);`
      }
    }};
    color: var(--ZUI-colors_text);

    &::placeholder {
      color: transparent;
    }
    
    & + span {
      position: absolute;
      left: var(--ZUI-sizes_spacing_3);
      top: var(--ZUI-sizes_spacing_3);
      margin-top: calc(var(--ZUI-sizes_border_xs) * -1);
      opacity: .5;
      transition: all var(--ZUI-transitions_fast) ease;
      user-select: none;
      font-weight: bold;
    }

    &:not(:placeholder-shown) + span,
    &:focus + span {
      top: var(--ZUI-sizes_spacing_1);
      opacity: 1;
      font-size: .6rem;
    }

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