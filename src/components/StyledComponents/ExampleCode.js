import Highlight from "react-highlight";
import { Container, Button, Card } from "../../ZUI";

export const ExampleCode = ({children, lang, noCopy}) => (
  <Card>
    <Container flex gap={0}>
      <Container.Row size={12}>
        <Highlight language={lang}>{children}</Highlight>
      </Container.Row>
      {!noCopy && <Container.Row size="auto">
        <Button size="xs" variant="text" style={{marginTop: "10px"}}>Copy</Button>
      </Container.Row>}
    </Container>
  </Card>
)

ExampleCode.defaultProps = {
  lang: "html",
}