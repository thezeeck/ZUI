import { Anchor } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, Code } from "../components/StyledComponents";

export const AnchorContent = () => {
  return (
    <Layout>
      <H1>Anchor</H1>
      <p>
        Anchors <Code>{`<Anchor>`}</Code> component brings to the developers the possibility to customize
        all links in their project in the same place or customize each element separately, this
        component renders an <Code>{`<a>`}</Code> HTML element.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed in turpis nec dolor lobortis aliquet et at metus. <Anchor link="https://www.google.com/" target="_blank" background="red">Test</Anchor><br />
        Vivamus ultrices mauris varius aliquam viverra.
        Vestibulum ac sapien rhoncus, sodales quam et, dictum ligula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed in turpis nec dolor lobortis aliquet et at metus. <Anchor link="https://www.google.com/" target="_blank" background="white" textColor="black" radius=".5rem">Test</Anchor><br />
        Vivamus ultrices mauris varius aliquam viverra.
        Vestibulum ac sapien rhoncus, sodales quam et, dictum ligula.
      </p>
    </Layout>
)}