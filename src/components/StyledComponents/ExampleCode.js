import Highlight from "react-highlight";
import { Container, Button, Row } from "../../ZUI";

export const ExampleCode = ({children, lang, noCopy}) => {
  return (
    <Container flex background="gray_5" radius="xl" shadow="gray" gap={3}>
      <Row size={12}>
        <Highlight language={lang}>{children}</Highlight>
      </Row>
      {!noCopy && <Row size="auto">
        <Button size="xs" variant="text">Copy</Button>
      </Row>}
    </Container>
  )
}

ExampleCode.defaultProps = {
  lang: "html",
}