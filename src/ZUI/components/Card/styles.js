import styled from "styled-components";

export const CardUI = styled.div`
  border-radius: ${({radius}) => `var(--ZUI-sizes_radius_${radius})`};
  color: ${({textColor}) => textColor};
  padding: var(--ZUI-sizes_padding_4);
  background-color: var(--ZUI-colors_gray_5);
`;