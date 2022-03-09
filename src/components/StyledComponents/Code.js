import styled from "styled-components";
import { useThemeContext, hexToRgba } from "../../ZUI";


const CodeUI = styled.code`
  color: ${({colors}) => colors.primaryLight}};
  font-size: .875rem;
  background-color: ${({colors}) => hexToRgba(colors.primaryLight, .2)}};
  display: inline-block;
  padding: .125rem .25rem;
  border-radius: .5rem;
`;

export const Code = ({ children }) => {
  const { theme } = useThemeContext();
  const { colors } = theme;

  return (
    <CodeUI colors={colors}>
      {children}
    </CodeUI>
  )
}