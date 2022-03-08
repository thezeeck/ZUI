import styled from "styled-components";
import { GetTheme, hexToRgba } from "../../ZUI";


const CodeUI = styled.code`
  color: ${({colors}) => colors.primaryLight}};
  font-size: .8rem;
  background-color: ${({colors}) => hexToRgba(colors.primaryLight, .2)}};
  display: inline-block;
  padding: .125rem .25rem;
  border-radius: .5rem;
`;

export const Code = ({ children }) => {
  const { colors } = GetTheme();

  return (
    <CodeUI colors={colors}>
      {children}
    </CodeUI>
  )
}