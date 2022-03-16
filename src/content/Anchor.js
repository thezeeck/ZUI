import { Anchor, Container } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, Code, ExampleCode } from "../components/StyledComponents";

export const AnchorContent = () => {
  return (
    <Layout>
      <H1>Anchor</H1>
      <p>
        Anchors <Code>{`<Anchor>`}</Code> component brings to the developers the possibility to customize
        all links in their project in the same place or customize each element separately, this
        component renders an <Code>{`<a>`}</Code> HTML element.
      </p>
      <ExampleCode icon="copy" code="import { Anchor } from 'zeeck-ui';" />
    </Layout>
)}