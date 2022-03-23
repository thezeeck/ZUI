import { Container, hexToRgba, useThemeContext, Button } from "../../ZUI";
import styled from "styled-components";

export const ExampleCode = ({code, noCopy}) => {
  const { theme } = useThemeContext();
  const codeArray = code.split(" ");
  const handleClick = () => {
    navigator.clipboard.writeText(code);
  }
  return (
    <Container
      shadow="primary"
      radius="sm"
      flex
      background={hexToRgba(theme.colors.primary, .15)}
    >
      <Pre>{styleCode(codeArray)}</Pre>
      {!noCopy && <Button
        style={{margin: "0 0 0 auto", width: "max-content"}}
        onClick={handleClick}
        size="xs"
      >copy</Button>}
    </Container>)
}

const styleCode = codes => codes.map((element, index) => {
  const words = /(abstract)|(arguments)|(await)|(boolean)|(break)|(byte)|(case)|(catch)|(char)|(class)|(const)|(continue)|(debugger)|(default)|(delete)|(do)|(double)|(else)|(enum)|(eval)|(export)|(extends)|(false)|(final)|(finally)|(float)|(for)|(function)|(goto)|(if)|(implements)|(import)|(in)|(instanceof)|(int)|(interface)|(let)|(long)|(native)|(new)|(null)|(package)|(private)|(protected)|(public)|(return)|(short)|(static)|(super)|(switch)|(synchronized)|(this)|(throw)|(throws)|(transient)|(true)|(try)|(typeof)|(var)|(void)|(volatile)|(while)|(with)|(yield)|(from)/g;
  const getColor = text => {
    if (/[[]\(\){};=]/.test(element)) {
      return "gray500";
    } else if (/'(.*?)'|"(.*?)"/.test(element)) {
      return "green300";
    } else if (words.test(element)) {
      return "pink300";
    }
  }
  return <FragmentCode key={index} textColor={`var(--ZUI-colors_${getColor(element)})`}>{element}</FragmentCode>
});

const FragmentCode = styled.span`
  color: ${({textColor}) => textColor};
  margin-right: .5rem;
`;

const Pre = styled.pre`
  width: 100%;
  margin: 0 1rem 0 0;
  font-size: .9rem;
`;