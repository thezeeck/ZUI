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
    ${({size, variant}) => {
      let sizes = {};
      if (size === "xs") sizes = {fs: 1, rd: "xs", wd: 4};
      else if (size === "sm") sizes = {fs: 2, rd: "sm", wd: 5};
      else if (size === "lg") sizes = {fs: 3, rd: "md", wd: 8};
      else if (size === "xl") sizes = {fs: 4, rd: "lg", wd: 10};
      else sizes = {fs: 3, rd: "md", wd: 6};
      
      if (variant === "underline") sizes.rd = 0;
      if (variant === "rounded") sizes.rd = "var(--ZUI-sizes_radius_xl)";
      else sizes.rd = `var(--ZUI-sizes_radius_${sizes.rd})`;

      return `
        font-size: var(--ZUI-sizes_font_${sizes.fs});
        width: var(--ZUI-sizes_space_${sizes.wd});
        border-radius: ${sizes.rd};
        height: var(--ZUI-sizes_button_height_${size});`
    }}
    ${({color, variant}) => {
      if (variant === "default" || variant === "rounded") return `border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_3);`
      if (variant === "underline") return `
        border-width: 0 0 var(--ZUI-sizes_border_sm);
        border-style: solid;
        border-color: var(--ZUI-colors_${color}_3);`
      if (variant === "shadow") return `border: var(--ZUI-sizes_border_sm) solid transparent;`
    }};
    color: ${({color}) => `var(--ZUI-colors_${color}_5)`};

    &::placeholder {
      color: ${({color}) => `var(--ZUI-colors_${color}_4)`};
      opacity: .5;
    }

    &:focus,
    &:focus-visible {
      outline: currentcolor none medium;
      box-shadow: ${({color}) => `0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${color === "gray" ? "primary" : color})`};
      ${({variant, color}) => variant === "shadow" && `background: var(--ZUI-colors_${color}_1);`}
    }

    &:disabled {
      opacity: .4;
      cursor: not-allowed;
      user-select: none;
    }

    &:invalid {
      ${({is_required}) => is_required && `
        border-color: var(--ZUI-colors_error);
        color: var(--ZUI-colors_error);
      `}
    }
  }
`;

export const LabelUI = styled.span`
  margin-bottom: var(--ZUI-sizes_spacing_2);
  display: inline-block;

  &::after {
    ${({is_required}) => is_required && `
      content: "*";
      margin-left: var(--ZUI-sizes_spacing_2);
      color: var(--ZUI-colors_error)
    `}
  }
`;