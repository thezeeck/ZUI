import { Anchor, Container, Input, Button } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";

export const InputContent = () => (
  <Layout>
    <Container.Row>
      <H1>Input</H1>
      <p>
        Input <Code>{`<Input>`}</Code> component brings to the developers the possibility to get or show information to the user,
        this component renders an <Code>{`<input>`}</Code> HTML element.
      </p>
      <ExampleCode lang='javascript'>
        {`import { Input } from "zeeck-ui";`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Default</H2>
      <p>
        The default <Code>Input</Code> is type text and is editable.
      </p>
      <p>
        <Input placeholder="Input text" />
      </p>
      <ExampleCode>
        {`<p>
  <Input label="Input text" placeholder="text"/>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Disabled</H2>
      <p>You set a non editable <Code>Input</Code> with the <Code>disabled</Code> property.</p>
      <p>
        <Input disabled value="Disabled Input" />
      </p>
      <ExampleCode>{`<p>
  <Input disabled value="Disabled Input" />
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
    <H2>Sizes</H2>
      <p>The <Code>Button</Code> component has 5 differents sizes.</p>
      <p>
        <Input size="xs" label="Input text" /> <Button size="xs">XS</Button>
      </p>
      <p>
        <Input size="sm" label="Input text" /> <Button size="sm">SM</Button>
      </p>
      <p>
        <Input size="md" label="Input text" /> <Button size="md">MD</Button>
      </p>
      <p>
        <Input size="lg" label="Input text" /> <Button size="lg">LG</Button>
      </p>
      <p>
        <Input size="xl" label="Input text" /> <Button size="xl">XL</Button>
      </p>

      <p>
        <Input size="xs" placeholder="Input" /> <Button size="xs">XS</Button>
      </p>
      <p>
        <Input size="sm" placeholder="Input" /> <Button size="sm">SM</Button>
      </p>
      <p>
        <Input size="md" placeholder="Input" /> <Button size="md">MD</Button>
      </p>
      <p>
        <Input size="lg" placeholder="Input" /> <Button size="lg">LG</Button>
      </p>
      <p>
        <Input size="xl" placeholder="Input" /> <Button size="xl">XL</Button>
      </p>
    </Container.Row>
    {/* <Container.Row>
      <H2>Colors</H2>
      <p>You can change the Anchor <Code>color</Code> with the <Code>textColor</Code> property</p>
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
  <br />
  <Anchor textColor="secondary" href="#">
    Lorem ipsum dolor sit amet (Secondary)
  </Anchor>
  <br />
  <Anchor textColor="success" href="#">
    Lorem ipsum dolor sit amet (Success)
  </Anchor>
  <br />
  <Anchor textColor="warning" href="#">
    Lorem ipsum dolor sit amet (Warning)
  </Anchor>
  <br />
  <Anchor textColor="error" href="#">
    Lorem ipsum dolor sit amet (Error)
  </Anchor>
  <br />
  <Anchor href="#">
    Lorem ipsum dolor sit amet (Default)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
      <p>You can change the default look with the <Code>decoration</Code> and <Code>Block</Code> properties.</p>
    </Container.Row>
    <Container.Row>
      <h3>Underline</h3>
      <p>Adds an underline style only in the hover state.</p>
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
  <br />
  <Anchor href="#" decoration textColor="secondary">
    Lorem ipsum dolor sit amet (Decoration)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Block</h3>
      <p>Adds a background color in the hover state and also change the display inline to inline-block.</p>
      <p>
        <Anchor href="#" box textColor="success">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <p>
        <Anchor href="#" box textColor="warning">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" box textColor="success">
    Lorem ipsum dolor sit amet (Box)
  </Anchor>
  <Anchor href="#" box textColor="warning">
    Lorem ipsum dolor sit amet (Box)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Icons</H2>
      <p>You can add the default icon setting the <Code>icon</Code> property and also you can add a custom icon changing the <Code>icon</Code> property value.</p>
      <p>
        <Anchor href="#" icon>Lorem ipsum dolor sit amet (Icon)</Anchor>
      </p>
      <p>
        <Anchor href="#" icon="chevron-left">Lorem ipsum dolor sit amet (Icon back)</Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" icon>
    Lorem ipsum dolor sit amet (Icon)
  </Anchor>
  <br />
  <Anchor href="#" icon="back">
    Lorem ipsum dolor sit amet (Icon back)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
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
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="textColor options" constName="colors" id="anchorColors" />
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Container.Row> */}
  </Layout>
);