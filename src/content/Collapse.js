import { Collapse, Container } from "../ZUI";
import { Anchor } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { Types } from "../components/StyledComponents/types";

export const CollapseContent = () => (
    <Layout>
      <H1>Collapse</H1>
      <p>
        Anchors <Code>{`<Anchor>`}</Code> component brings to the developers the possibility to customize
        all links in their project in the same place or customize each element separately, this
        component renders an <Code>{`<a>`}</Code> HTML element.
      </p>
      <ExampleCode lang='javascript'>
        {`import { Collapse } from "zeeck-ui";`}
      </ExampleCode>
      <H2>Default</H2>
      <p>
        The default Anchor color it's the primary color defined in the theme config.
      </p>
      <Container>
        <Collapse.Group>
          <Collapse.Item>
            1 Lorem ipsum dolor sit amet
          </Collapse.Item>
          <Collapse.Item>
            2 Lorem ipsum dolor sit amet
          </Collapse.Item>
          <Collapse.Item>
            3 Lorem ipsum dolor sit amet
          </Collapse.Item>
        </Collapse.Group>
      </Container>
      <ExampleCode>
        {`<p>
  <Anchor link="#">
    Lorem ipsum dolor sit amet
  </Anchor>
</p>`}
      </ExampleCode>
      <H2>Colors</H2>
      <p>
        <Anchor textColor="primary" href="#">Lorem ipsum dolor sit amet (Primary)</Anchor>
      </p>
      <p>
        <Anchor textColor="secondary" href="#">Lorem ipsum dolor sit amet (Secondary)</Anchor>
      </p>
      <p>
        <Anchor textColor="success" href="#">Lorem ipsum dolor sit amet (Success)</Anchor>
      </p>
      <p>
        <Anchor textColor="warning" href="#">Lorem ipsum dolor sit amet (Warning)</Anchor>
      </p>
      <p>
        <Anchor textColor="error" href="#">Lorem ipsum dolor sit amet (Error)</Anchor>
      </p>
      <p>
        <Anchor href="#">Lorem ipsum dolor sit amet (Default)</Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor textColor="primary" href="#">
    Lorem ipsum dolor sit amet (Primary)
  </Anchor>
</p>
<p>
  <Anchor textColor="secondary" href="#">
    Lorem ipsum dolor sit amet (Secondary)
  </Anchor>
</p>
<p>
  <Anchor textColor="success" href="#">
    Lorem ipsum dolor sit amet (Success)
  </Anchor>
</p>
<p>
  <Anchor textColor="warning" href="#">
    Lorem ipsum dolor sit amet (Warning)
  </Anchor>
</p>
<p>
  <Anchor textColor="error" href="#">
    Lorem ipsum dolor sit amet (Error)
  </Anchor>
</p>
<p>
  <Anchor href="#">
    Lorem ipsum dolor sit amet (Default)
  </Anchor>
</p>`}
      </ExampleCode>
      <H2>Variants</H2>
      <h3>Underline</h3>
      <p>
        <Anchor href="#" decoration>Lorem ipsum dolor sit amet (Decoration)</Anchor>
      </p>
      <p>
        <Anchor href="#" decoration textColor="secondary">Lorem ipsum dolor sit amet (Decoration)</Anchor>
      </p>
      <ExampleCode>{`<p>
  <Anchor href="#" decoration>
    Lorem ipsum dolor sit amet (Decoration)
  </Anchor>
</p>
<p>
  <Anchor href="#" decoration textColor="secondary">
    Lorem ipsum dolor sit amet (Decoration)
  </Anchor>
</p>`}</ExampleCode>
      <h3>Block</h3>
      <p>
        <Anchor href="#" box textColor="success">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <p>
        <Anchor href="#" box textColor="warning">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <ExampleCode>{`<Anchor href="#" box textColor="success">
  Lorem ipsum dolor sit amet (Box)
</Anchor>
<Anchor href="#" box textColor="warning">
  Lorem ipsum dolor sit amet (Box)
</Anchor>`}</ExampleCode>
      <H2>Icons</H2>
      <p>
        <Anchor href="#" icon>Lorem ipsum dolor sit amet (Icon)</Anchor>
      </p>
      <p>
        <Anchor href="#" icon="back">Lorem ipsum dolor sit amet (Icon back)</Anchor>
      </p>
      <ExampleCode>{`<Anchor href="#" icon>
  Lorem ipsum dolor sit amet (Icon)
</Anchor>
<Anchor href="#" icon="back">
  Lorem ipsum dolor sit amet (Icon back)
</Anchor>`}</ExampleCode>
      <H2>Props</H2>
      <Table> 
        <Row
          attribute="box"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the display to inline-block"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="decoration"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Display the underline text only in the hover status"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="href"
          type={<Code>string</Code>}
          values="-"
          description="Link url"
          defaultValue="-" />
        <Row
          attribute="icon"
          type={<><Code>boolean</Code> <Code>string</Code></>}
          values={<><Code>true/false</Code> <Anchor as={Link} to="/icons">Icons</Anchor></>}
          description="Show an icon"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="style"
          type="-"
          values="Any valid CSS rule"
          description="Override Default CSS rules"
          defaultValue="-" />
        <Row
          attribute="textColor"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">LinkColors</Anchor>}
          description="Change font color"
          defaultValue={<Code>inherit</Code>} />
      </Table>
      <H2>Types</H2>
      <Types.Colors title="textColor options" constName="linkColors" id="anchorColors" />
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Layout>
);