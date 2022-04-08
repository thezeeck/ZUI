import { Anchor, Card, Container, Grid } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { images } from "../img";

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
      <p>The <Code>Card</Code> component has 3 different styles.</p>
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
      <H2>Colors</H2>
      <p>You can change the color background with the <Code>color</Code> property, this configuration also change the font to white.</p>
      <Card color="primary" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Primary color Card</p>
      </Card>
      <Card color="secondary" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Primary color Card</p>
      </Card>
      <Card color="success" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Primary color Card</p>
      </Card>
      <Card color="warning" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Primary color Card</p>
      </Card>
      <Card color="error" style={{marginBottom: "var(--ZUI-sizes_spacing_5)"}}>
        <p>Primary color Card</p>
      </Card>
      <ExampleCode>
          {`<Grid>
  <Grid.Item>
    <Card color="primary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="secondary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="success">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="warning">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="error">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Cover</H2>
      <p>You can set some content as a background of the <Code>card</Code>, the <Code>cover</Code> property allows you to set an image or other component as background</p>
      <Grid>
        <Grid.Item xs={4}>
          <Card cover={images.cover01}>
            <Card.Header>
              <h2>Some cool content</h2>
              <h3>Big title</h3>
            </Card.Header>
            <Card.Body>
              <p>Card content description</p>
            </Card.Body>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <Card cover="https://www.webivm.com/wp-content/uploads/2016/12/Free-Stock-Images.jpg">
            <Card.Header>
              <h2>Some cool content</h2>
              <h3>Big title</h3>
            </Card.Header>
            <Card.Body>
              <p>Card content description</p>
            </Card.Body>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <Card cover>
            <Card.Header>
              <h2>Some cool content</h2>
              <h3>Big title</h3>
            </Card.Header>
            <Card.Body>
              <p>Card content description</p>
            </Card.Body>
          </Card>
        </Grid.Item>
      </Grid>
      <ExampleCode>
          {`<Grid>
  <Grid.Item>
    <Card color="primary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="secondary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="success">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="warning">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="error">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Header component</H2>
      <p>This component can be used for set a card title.</p>
      <Card>
        <Card.Header>
          Card title
        </Card.Header>
        Card content
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Footer component</H2>
      <p>This component is designed to add a footer card.</p>
      <Card>
        Card content
        <Card.Footer>
          Card title
        </Card.Footer>
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Body component</H2>
      <p>This component can be used to add styles and custom behaviors, is not required but can help to maintain a cleaner code.</p>
      <Card>
        <Card.Header>
          Card title
        </Card.Header>
        <Card.Body>
          Card content
        </Card.Body>
        <Card.Footer>
          Card title
        </Card.Footer>
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Header and Footer variants</H2>
      <p>The <Code>Header</Code> and <Code>Footer</Code> components has 3 differents styles.</p>
    </Container.Row>
    <Container.Row>
      <h3>Transparent</h3>
      <Card>
        <Card.Header>
          Card title
        </Card.Header>
        Card content
        <Card.Footer>
          Card title
        </Card.Footer>
      </Card>      
    </Container.Row>
    <Container.Row>
      <h3>Bordered</h3>
      <Card bordered>
        <Card.Header>
          Card title
        </Card.Header>
        Card content
        <Card.Footer>
          Card title
        </Card.Footer>
      </Card>
    </Container.Row>
    <Container.Row>
      <h3>Ghost</h3>
      <Card ghost>
        <Card.Header>
          Card title
        </Card.Header>
        Card content
        <Card.Footer>
          Card title
        </Card.Footer>
      </Card>
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