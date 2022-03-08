import styled from "styled-components";

export const TextUI = styled.span`
  text-decoration: ${({decoration}) => decoration};
  color: ${({textColor}) => textColor};
  display: ${(props) => props.display};
`;