import { Anchor, Card, Container } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";
import { Link } from "react-router-dom";

export const CardContent = () => (
  <Layout>
    <Container.Row>
      <H1>Card</H1>
      <p>
        Cards <Code>Card</Code> can be used to display simple content like text or images, you can also use layouts for complex content.
      </p>
      <ExampleCode lang='javascript'>
        {`import { Card } from "zeeck-ui";`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Basic card</H2>
      <Card style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Text card</p>
      </Card>
      <ExampleCode>
        {`<Card>
  <p>Text card</p>
</Card>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
      <Card variant="shadow" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Shadow Card</p>
      </Card>
      <Card variant="bordered" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Bordered Card</p>
      </Card>
      <br />
      <Card variant="dense" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Dense Card</p>
      </Card>
      <ExampleCode>
        {`<Grid>
  <Grid.Item>
    <Card variant="shadow">
      <p>Text card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card variant="bordered">
      <p>Text card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card variant="dense">
      <p>Text card</p>
    </Card>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
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
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    <Container.Row>
      
    </Container.Row>
    
    
    
    
    
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
    <Types title="textColor options" constName="colors" id="anchorColors" />
    <h3 id="icons">Icons</h3>
    <Anchor as={Link} to="/icons">Icons</Anchor>
  </Layout>
);