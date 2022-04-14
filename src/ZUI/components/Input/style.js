import styled from "styled-components";

export const InputContainer = styled.label`
  position: relative;
  display: inline-block;

  > input {
    background: var(--ZUI-colors_gray_1);
    padding: var(--ZUI-sizes_spacing_3);
    border-radius: var(--ZUI-sizes_radius_md);
    font-size: var(--ZUI-sizes_font_3);
    line-height: calc(var(--ZUI-sizes_font_4) - (var(--ZUI-sizes_spacing_4) * 2));
    height: calc(var(--ZUI-sizes_font_4) + var(--ZUI-sizes_spacing_4));
    box-sizing: border-box;
    ${({color, variant}) => {
      if (variant === "shadow") {
        return `
          box-shadow: var(--ZUI-shadows_${color.replace("gradients_", "")}_sm);
          border: var(--ZUI-sizes_border_xs) solid var(--ZUI-colors_gray_1);`
      }
    }};
    color: var(--ZUI-colors_text);

    &::placeholder {
      color: transparent;
    }
    
    & + span {
      position: absolute;
      left: var(--ZUI-sizes_spacing_4);
      top: var(--ZUI-sizes_spacing_3);
      opacity: .5;
      transition: all .5s ease;
    }

    &:not(:placeholder-shown) + span,
    &:focus + span {
      top: calc(var(--ZUI-sizes_spacing_2) * -1);
      opacity: 1;
      font-size: .85rem;
    }
  }
`;