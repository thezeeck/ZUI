import styled from "styled-components";

export const ELinkUI = styled.span`
  > a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
  }
`;