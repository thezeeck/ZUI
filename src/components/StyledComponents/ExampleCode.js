import Highlight from "react-highlight";
import { Container, Button } from "../../ZUI";

export const ExampleCode = ({children, lang, noCopy}) => {
  return (
    <Container flex background="gray_light" radius="xl" shadow="gray" gap={3}>
      <Highlight language={lang}>{children}</Highlight>
      {!noCopy && <Button size="xs" variant="text">Copy</Button>}
    </Container>
  )
}

ExampleCode.defaultProps = {
  lang: "html",
}