import styled from "styled-components";

export const GroupUI = styled.div`
  width: 100%;
`;

export const ItemUI = styled.section`
  padding: var(--ZUI-sizes_padding_4);
`;

export const ItemContent = styled.section`
  max-height: 0;
  overflow: hidden;
  transition: all .5s cubic-bezier(0, 1, 0, 1);

  > div {
    padding: var(--ZUI-sizes_padding_4) 0;
  }

  &.open {
    max-height: 99rem;
    transition: all .5s ease-in-out;
  }
`;