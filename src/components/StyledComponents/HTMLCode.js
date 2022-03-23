import { Container, hexToRgba, useThemeContext, Button } from "../../ZUI";
import styled from "styled-components";

export const HTMLCode = ({code}) => {
  const { theme } = useThemeContext();
  const codeArray = code.split("");
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
      <Button
        style={{margin: "0 0 0 auto", width: "max-content"}}
        onClick={handleClick}
        size="xs"
      >copy</Button>
    </Container>)
}

const styleCode = codes => {
  let isTag = false;
  let isString = false;
  let isTagName = false;
  const getColor = (text, index) => {
    if (/[<>;]/.test(text) || (isTag && /[/]/.test(text))) {
      isTag = !/[>]/.test(text);
      return "gray500";
    }
    
    if (isTag) {
      if (/[=]/.test(text)) return "gray700";
      
      if (/[</]/.test(codes[index - 1]) || isTagName) {
        isTagName = true;
        if (text === " ") isTagName = false;
        return "blue300";
      }

      if (isString || /["']/.test(text)) {
        if (/["']/.test(text)) isString = !isString;
        return "green400";
      }
      
      return "blue500";
    }
  };
  
  return codes.map((element, index) => 
    <FragmentCode
      key={index}
      textColor={`var(--ZUI-colors_${getColor(element, index)})`}>
      {element}
    </FragmentCode>);
}

const FragmentCode = styled.span`
  color: ${({textColor}) => textColor};
`;

const Pre = styled.pre`
  width: 100%;
  margin: 0 1rem 0 0;
  font-size: .9rem;
`;