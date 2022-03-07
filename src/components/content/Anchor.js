import { Anchor } from "../../ZUI";
import { Layout } from "../Layout";

export const AnchorContent = () => (
  <Layout>
    <div>
      <h1 id="anchorWidget">Anchor</h1>
      <section>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed in turpis nec dolor lobortis aliquet et at metus. <Anchor link="https://www.google.com/" target="_blank">Test</Anchor> Vivamus ultrices mauris varius aliquam viverra.
        Vestibulum ac sapien rhoncus, sodales quam et, dictum ligula.
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
        
      </section>
    </div>
  </Layout>
)