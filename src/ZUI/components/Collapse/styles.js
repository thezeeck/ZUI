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
  transition: all var(--ZUI-transitions_regular) cubic-bezier(0, 1, 0, 1);

  > div {
    padding: var(--ZUI-sizes_padding_4) 0;
  }

  &.open {
    max-height: 99rem;
    transition: all var(--ZUI-transitions_regular) ease-in-out;
  }
`;

export const ItemTitle = styled.div`
  padding: var(--ZUI-sizes_padding_4);
  cursor: pointer;

  :focus-visible {
    outline: currentcolor none medium;
    box-shadow: 0 0 0 calc(var(--ZUI-sizes_padding_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_padding_1) var(--ZUI-colors_primary);
  }

  > h3 {
    margin: 0;
  }
`;