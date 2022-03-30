import Highlight from "react-highlight";
import { Container, Button } from "../../ZUI";

export const ExampleCode = ({children, lang, noCopy}) => {
  return (
    <Container flex background="gray_5" radius="xl" shadow="gray" gap={3}>
      <Container.Row size={12}>
        <Highlight language={lang}>{children}</Highlight>
      </Container.Row>
      {!noCopy && <Container.Row size="auto">
        <Button size="xs" variant="text">Copy</Button>
      </Container.Row>}
    </Container>
  )
}

ExampleCode.defaultProps = {
  lang: "html",
}