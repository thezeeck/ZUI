import { Container, hexToRgba, useThemeContext } from "../../ZUI";
import styled from "styled-components";

export const ExampleCode = ({code}) => {
  const { theme } = useThemeContext();
  const codeArray = code.split(" ");
  return (
    <Container
      shadow="primary"
      radius="sm"
      background={hexToRgba(theme.colors.primary, .15)}
    >
      {styleCode(codeArray, theme)}
    </Container>)
}

const styleCode = (codes, theme) => codes.map((element, index) => {
  const words = /(abstract)|(arguments)|(await)|(boolean)|(break)|(byte)|(case)|(catch)|(char)|(class)|(const)|(continue)|(debugger)|(default)|(delete)|(do)|(double)|(else)|(enum)|(eval)|(export)|(extends)|(false)|(final)|(finally)|(float)|(for)|(function)|(goto)|(if)|(implements)|(import)|(in)|(instanceof)|(int)|(interface)|(let)|(long)|(native)|(new)|(null)|(package)|(private)|(protected)|(public)|(return)|(short)|(static)|(super)|(switch)|(synchronized)|(this)|(throw)|(throws)|(transient)|(true)|(try)|(typeof)|(var)|(void)|(volatile)|(while)|(with)|(yield)|(from)/g;
  const getColor = text => {
    if (/[\[\]\(\){}\;=]/.test(element)) {
      return theme.colors.gray500;
    } else if (words.test(element)) {
      return theme.colors.pink300;
    } else if (/'(.*?)'|"(.*?)"/.test(element)) {
      return theme.colors.green300;
    } else {
      return theme.colors.gray900;
    }
  }
  return <FragmentCode key={index} textColor={getColor(element)}>{element}</FragmentCode>
});

const FragmentCode = styled.span`
  color: ${({textColor}) => textColor};
  margin-right: .5rem;
`;