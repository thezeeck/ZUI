import { Button, Anchor } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";
import { Link } from "react-router-dom";

export const ButtonContent = () => (
  <Layout>
    <H1>Button</H1>
    <p>
      Button <Code>{`<Button>`}</Code> component brings to the developers the possibility to customize
      all buttons in their project in the same place or customize each element separately, this
      component renders an <Code>{`<button>`}</Code> HTML element.
    </p>
    <ExampleCode lang="javascript">{`import { Button } from "zeeck-ui";`}</ExampleCode>
    <H2>Default</H2>
    <p>
      The default Button color it's the primary color defined in the theme config.
    </p>
    <p>
      <Button>Default</Button>
    </p>
    <ExampleCode>{`<Button>Disabled</Button>`}</ExampleCode>
    <H2>Disabled</H2>
    <p>
      <Button disabled>Disabled</Button>
    </p>
    <ExampleCode>{`<Button disabled>Disabled</Button>`}</ExampleCode>
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
    <ExampleCode>{`<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="md">MD</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>
<Button auto>auto</Button>`}</ExampleCode>
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
    <ExampleCode>{`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="gradients_primary">Gradient</Button>`}</ExampleCode>
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
    <ExampleCode>{`<Button color="primary" shadow>Primary</Button>
<Button color="secondary" shadow>Secondary</Button>
<Button color="success" shadow>Success</Button>
<Button color="warning" shadow>Warning</Button>
<Button color="error" shadow>Error</Button>
<Button color="gradients_primary" shadow>Gradient</Button>`}</ExampleCode>
    <H2>Loading</H2>
    <p>
      <Button color="primary" loading={1}>Primary</Button>
    </p>
    <p>
      <Button color="secondary" loading={2}>secondary</Button>
    </p>
    <p>
      <Button color="success" loading={3}>Success</Button>
    </p>
    <ExampleCode>{`<Button color="primary" loading={1}>Primary</Button>
<Button color="secondary" loading={2}>secondary</Button>
<Button color="success" loading={3}>Success</Button>`}</ExampleCode>
    <H2>Rounded</H2>
    <p>
      <Button margin={2} color="gradients_secondary" rounded>filled</Button>
    </p>
    <p>
      <Button margin={2} variant="outlined" color="success" rounded>outlined</Button>
    </p>
    <p>
      <Button margin={2} variant="flat" color="warning" rounded>text</Button>
    </p>
    <p>
      <Button margin={2} variant="shadow" color="error" rounded>text</Button>
    </p>
    <ExampleCode>{`<Button color="primary" loading={1}>Primary</Button>
<Button color="secondary" loading={2}>Secondary</Button>
<Button color="success" loading={3}>Success</Button>
<Button color="warning" loading={4}>Warning</Button>
<Button color="error" loading={5}>Error</Button>`}</ExampleCode>
    <H2>Variants</H2>
    <p>
      <Button margin={2}>filled</Button>
      <Button margin={2} color="gradients_secondary">filled</Button>
    </p>
    <p>
      <Button margin={2} variant="outlined" color="secondary">outlined</Button>
      <Button margin={2} variant="outlined" color="gradients_success">outlined</Button>
    </p>
    <p>
      <Button margin={2} variant="text" color="success">text</Button>
      <Button margin={2} variant="text" color="gradients_warning">text</Button>
    </p>
    <p>
      <Button margin={2} variant="flat" color="success">text</Button>
      <Button margin={2} variant="flat" color="gradients_warning">text</Button>
    </p>
    <p>
      <Button margin={2} variant="shadow" color="warning">text</Button>
      <Button margin={2} variant="shadow" color="gradients_error">text</Button>
    </p>
    <ExampleCode>{`<Button color="primary" loading={1}>Primary</Button>
<Button color="secondary" loading={2}>Secondary</Button>
<Button color="success" loading={3}>Success</Button>
<Button color="warning" loading={4}>Warning</Button>
<Button color="error" loading={5}>Error</Button>`}</ExampleCode>
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
        values={<Anchor href="#colors">Button Colors</Anchor>}
        description="Change the button color"
        defaultValue={<Code>primary</Code>} />
      <Row
        attribute="disabled"
        type={<Code>boolean</Code>}
        values={<Code>true/false</Code>}
        description="Change the status button"
        defaultValue={<Code>false</Code>} />
      <Row
        attribute="icon"
        type={<Code>string</Code>}
        values={<Anchor as={Link} to="/icons">Icons</Anchor>}
        description="Show an icon"
        defaultValue={<Code>false</Code>} />
      <Row
        attribute="loading"
        type={<Code>number</Code>}
        values="1,2,3"
        description="Show the loading animation"
        defaultValue={<Code>undefined</Code>} />
      <Row
        attribute="rounded"
        type={<Code>boolean</Code>}
        values={<Code>true/false</Code>}
        description="Change the button border radius"
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
        values={<Anchor href="#sizes">Sizes</Anchor>}
        description="Display the underline text only in the hover status"
        defaultValue={<Code>md</Code>} />
      <Row
        attribute="variant"
        type={<Code>string</Code>}
        values={<Anchor href="#variants">Variant</Anchor>}
        description="Change the button style"
        defaultValue={<Code>filled</Code>} />
    </Table>
    <H2>Types</H2>
    <Types title="Button colors options" constName="colors" id="colors"/>
    <Types title="Button sizes" constName="weights" id="sizes"/>
    <Types title="Button variants" constName="buttonVariants" id="variants"/>
    <h3 id="icons">Icons</h3>
    <Anchor as={Link} to="/icons">Icons</Anchor>
  </Layout>
);