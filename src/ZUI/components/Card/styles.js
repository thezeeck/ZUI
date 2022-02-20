import styled from "styled-components";

export const CardUI = styled.div`
  border-radius: ${({radius}) => radius};
  color: ${({textColor}) => textColor};
`;