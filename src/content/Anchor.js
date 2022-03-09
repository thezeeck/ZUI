import { Anchor, Container, useGetTheme, hexToRgba } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, Code } from "../components/StyledComponents";

export const AnchorContent = () => {
  const theme = useGetTheme();
  return (
    <Layout>
      <H1>Anchor</H1>
      <p>
        Anchors <Code>{`<Anchor>`}</Code> component brings to the developers the possibility to customize
        all links in their project in the same place or customize each element separately, this
        component renders an <Code>{`<a>`}</Code> HTML element.
      </p>
      <Container shadow="primary" icon="copy" background={hexToRgba(theme.colors.primary, .15)} radius=".5rem">
        {"import { Anchor } from 'zeeck-ui';"}
      </Container>
    </Layout>
)}