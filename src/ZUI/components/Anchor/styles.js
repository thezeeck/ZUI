import styled from "styled-components";

export const AnchorUI = styled.a`
  color: inherit;
  text-decoration: ${({decoration}) => decoration};
  color: ${({textColor}) => textColor};
  display: ${({display}) => display};
`;