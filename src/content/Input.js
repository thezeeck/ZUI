import { Anchor, Container, Input, Button, Grid } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";

export const InputContent = () => {
  let value = "value";

  return (
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
      <Grid direction="column" align_items="flex_start">
        <Grid.Item xs={12}>
          <Input size="xs" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input size="sm" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input size="md" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input size="lg" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input size="xl" placeholder="Input" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid direction="column" align_items="flex_start">
  <Grid.Item xs={12}>
    <Input size="xs" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input size="sm" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input size="md" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input size="lg" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input size="xl" placeholder="Input" />
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Colors</H2>
      <p>You can change the <Code>Input</Code> color with the <Code>color</Code> property</p>
      <Grid direction="column" align_items="flex_start">
        <Grid.Item xs={12}>
          <Input color="primary" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input color="secondary" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input color="success" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input color="warning" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input color="error" placeholder="Input" />
        </Grid.Item>
        <Grid.Item xs={12}>
          <Input color="gray" placeholder="Input" />
        </Grid.Item>
      </Grid>
      <ExampleCode>
        {`<Grid direction="column" align_items="flex_start">
  <Grid.Item xs={12}>
    <Input color="primary" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input color="secondary" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input color="success" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input color="warning" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input color="error" placeholder="Input" />
  </Grid.Item>
  <Grid.Item xs={12}>
    <Input color="gray" placeholder="Input" />
  </Grid.Item>
</Grid>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
      <p>You can change the default look with the <Code>variant</Code> property.</p>
    </Container.Row>
    <Container.Row>
      <h3>Rounded</h3>
      <p>Adds a rounded shape to the <Code>Input</Code> component.</p>
      <Grid direction="column" align_items="flex_start">
        <Grid.Item xs={12}>
          <Input color="primary" placeholder="Input" variant="rounded" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid direction="column" align_items="flex_start">
  <Grid.Item xs={12}>
    <Input color="primary" placeholder="Input" variant="rounded" />
  </Grid.Item>
</Grid>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Underline</h3>
      <p>Removes the radius of the corners and also the borders with the exception of the bottom border.</p>
      <Grid direction="column" align_items="flex_start">
        <Grid.Item xs={12}>
          <Input color="primary" placeholder="Input" variant="underline" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid direction="column" align_items="flex_start">
  <Grid.Item xs={12}>
    <Input color="primary" placeholder="Input" variant="rounded" />
  </Grid.Item>
</Grid>`}
      </ExampleCode>
    </Container.Row>
    <Input color="primary" placeholder="Input" variant="underline" onChange={e => console.log(e)} value={value} />
    {/* <Container.Row>
      <h3>Block</h3>
      <p>Adds a background color in the hover state and also change the display inline to inline-block.</p>
      <p>
        <Anchor href="#" box text_color="success">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <p>
        <Anchor href="#" box text_color="warning">Lorem ipsum dolor sit amet (Box)</Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" box text_color="success">
    Lorem ipsum dolor sit amet (Box)
  </Anchor>
  <Anchor href="#" box text_color="warning">
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
          attribute="text_color"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">LinkColors</Anchor>}
          description="Change font color"
          defaultValue={<Code>inherit</Code>} />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="text_color options" constName="colors" id="anchorColors" />
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Container.Row> */}
  </Layout>
)};