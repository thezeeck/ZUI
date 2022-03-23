import { Button, Anchor } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, ExampleCode, HTMLCode, Table, Row } from "../components/StyledComponents";
import { Link } from "react-router-dom";

export const ButtonContent = () => (
    <Layout>
      <H1>Button</H1>
      <p>
        Button <Code>{`<Button>`}</Code> component brings to the developers the possibility to customize
        all buttons in their project in the same place or customize each element separately, this
        component renders an <Code>{`<button>`}</Code> HTML element.
      </p>
      <ExampleCode icon="copy" code="import { Button } from 'zeeck-ui' ;" />
      <H2>Default</H2>
      <p>
        The default Button color it's the primary color defined in the theme config.
      </p>
      <p>
        <Button>Default</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button>Default</Button>;`} />
      <H2>Disabled</H2>
      <p>
        <Button disabled>Disabled</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button disabled>Disabled</Button>;`} />
      <H2>Sizes</H2>
      <p>
        <Button size="xs">XS</Button>
      </p>
      <p>
        <Button size="sm">SM</Button>
      </p>
      <p>
        <Button size="md">MD</Button>
      </p>
      <p>
        <Button size="lg">LG</Button>
      </p>
      <p>
        <Button size="xl">XL</Button>
      </p>
      <p>
        <Button auto>auto</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>
<Button auto>auto</Button>`} />
      <H2>Colors</H2>
      <p>
        <Button color="primary">Primary</Button>
      </p>
      <p>
        <Button color="secondary">Secondary</Button>
      </p>
      <p>
        <Button color="success">Success</Button>
      </p>
      <p>
        <Button color="warning">Warning</Button>
      </p>
      <p>
        <Button color="error">Error</Button>
      </p>
      <p>
        <Button color="gradients_primary">Gradient</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="gradients_primary">Gradient</Button>`} />
      <H2>Shadow</H2>
      <p>
        <Button color="primary" shadow>Primary</Button>
      </p>
      <p>
        <Button color="secondary" shadow>Secondary</Button>
      </p>
      <p>
        <Button color="success" shadow>Success</Button>
      </p>
      <p>
        <Button color="warning" shadow>Warning</Button>
      </p>
      <p>
        <Button color="error" shadow>Error</Button>
      </p>
      <p>
        <Button color="gradients_primary" shadow>Gradient</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="gradients_primary">Gradient</Button>`} />
      <H2>Loading</H2>
      <p>
        <Button color="primary" loading={1}>Primary</Button>
      </p>
      <p>
        <Button color="secondary" loading={2}>secondary</Button>
      </p>
      <p>
        <Button color="primary" loading={3} size="xs">Primary</Button>
      </p>
      <p>
        <Button color="secondary" loading={3} size="sm">Secondary</Button>
      </p>
      <p>
        <Button color="success" loading={3} size="md">Success</Button>
      </p>
      <p>
        <Button color="warning" loading={3} size="lg">Warning</Button>
      </p>
      <p>
        <Button color="error" loading={3} size="xl">Error</Button>
      </p>
      <HTMLCode icon="copy" code={`<Button color="primary" loading={1}>Primary</Button>
<Button color="secondary" loading={2}>Secondary</Button>
<Button color="success" loading={3}>Success</Button>
<Button color="warning" loading={4}>Warning</Button>
<Button color="error" loading={5}>Error</Button>`} />
      <H2>Icons</H2>
      <p>
        <Anchor href="#" icon>Lorem ipsum dolor sit amet (Icon)</Anchor>
      </p>
      <p>
        <Anchor href="#" icon="back">Lorem ipsum dolor sit amet (Icon back)</Anchor>
      </p>
      <HTMLCode icon="copy" code={`<Anchor href="#" icon>
  Lorem ipsum dolor sit amet (Icon)
</Anchor>
<Anchor href="#" icon="back">
  Lorem ipsum dolor sit amet (Icon back)
</Anchor>`} />
      <H2>APIs</H2>
      <Table>
        <Row
          attribute="auto"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Remove the min-width attribute"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="color"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">Button Colors</Anchor>}
          description="Change the button color"
          defaultValue={<Code>primary</Code>} />
        <Row
          attribute="disabled"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the status button"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="shadow"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Add a shadow bellow of the button"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="size"
          type={<Code>string</Code>}
          values={<Anchor as={Link} to="#sizes">Sizes</Anchor>}
          description="Display the underline text only in the hover status"
          defaultValue={<Code>md</Code>} />
        {/* 
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
          defaultValue="-" /> */}
      </Table>
      <H2>Types</H2>
      <h3 id="anchorColors">textColor options</h3>
      <ExampleCode icon="copy" code={`const textColor =
  | 'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error' ;
`} noCopy />
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Layout>
);