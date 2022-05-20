import styled from "styled-components";

export const LogoSize = styled.figure`
  width: 6.25rem;
  margin: 0;

  img {
    width: 100%;
  }

  figcaption {
    display: none;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;

  > button > span {
    transition: all var(--ZUI-transitions_regular) ease;
    transform: ${({menuStatus}) => menuStatus ? "rotate(180deg)" : "none"};
  }
`;