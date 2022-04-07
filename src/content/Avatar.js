import { Avatar, Anchor, Grid, Container } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { img } from "../constant";

export const AvatarContent = () => (
  <Layout>
    <Container.Row>
      <H1>Avatar</H1>
      <p>
        The Avatar <Code>{`<Avatar>`}</Code> component is used to represent an app user, and displays the profile picture, initials or an icon.
      </p>
      <ExampleCode lang="javascript">
        {`import { Avatar } from "zeeck-ui";`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Default</H2>
      <p>
        The default Avatar can be used by passing an image url (<Code>imgSrc</Code>), text (<Code>text</Code>) or an icon (<Code>icon</Code>) .
      </p>
      <p>
        <Avatar text="JS" />
      </p>
      <ExampleCode>
        {`<div>
  <Avatar text="JS" />
</div>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Sizes</H2>
      <p>The <Code>Avatar</Code> component has 5 different sizes.</p>
      <Grid>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} size="xs" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="JS" size="sm" />
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} size="md" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="UI" size="lg" />
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} size="xl" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar imgSrc="img.jpg" size="xs" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="JS" size="sm" />
  </Grid.Item>
  <Grid.Item>
    <Avatar imgSrc="img.jpg" size="md" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="UI" size="lg" />
  </Grid.Item>
  <Grid.Item>
    <Avatar imgSrc="img.jpg" size="xl" />
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Colors</H2>
      <p>The <Code>color</Code> property change the border and background colors.</p>
      <Grid>
        <Grid.Item>
          <Avatar text="OP" bgColor="primary" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="MN" bgColor="secondary" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="GA" bgColor="success" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="WM" bgColor="warning" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="DC" bgColor="error" />
        </Grid.Item>
        <Grid.Item>
          <Avatar text="DC" bgColor="gradients_primary" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar text="OP" bgColor="primary" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="MN" bgColor="secondary" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="GA" bgColor="success" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="WM" bgColor="warning" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="DC" bgColor="error" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="DC" bgColor="error" />
  </Grid.Item>
  <Grid.Item>
    <Avatar text="DC" bgColor="gradient_primary" />
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Border</H2>
      <p>You can set a border with the <Code>bordered</Code> property and change the weight with the <Code>borderWeight</Code>, but this feature is only for avatars with images.</p>
      <Grid>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="xs" bgColor="primary"/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="sm" bgColor="primary"/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="md" bgColor="primary"/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="lg" bgColor="primary"/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="xl" bgColor="gradients_warning" />
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="xs"
      bgColor="primary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01} 
      bordered borderWeight="sm"
      bgColor="primary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="md"
      bgColor="primary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="lg"
      bgColor="primary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="xl"
      bgColor="gradients_warning" />
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Zoom</H2>
      <p>You can enable a zoom animation with the <Code>zoom</Code> property for the hover state.</p>
      <Grid>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="sm" bgColor="error" zoom/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} zoom/>
        </Grid.Item>
        <Grid.Item>
          <Avatar text="UI" bordered borderWeight="md" bgColor="primary" zoom/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="lg" bgColor="error" zoom/>
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="sm"
      bgColor="error" zoom/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01} zoom/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      text="UI"
      bordered borderWeight="md"
      bgColor="primary" zoom/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="lg"
      bgColor="error" zoom/>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Squared</H2>
      <p>The <Code>Avatar</Code> component has two different shapes, the circle for default and square for round angles, you just need add the <Code>squared</Code> property.</p>
      <Grid>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="sm" bgColor="secondary" zoom squared pointer/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} zoom squared/>
        </Grid.Item>
        <Grid.Item>
          <Avatar text="UI" bordered borderWeight="md" bgColor="secondary" zoom squared/>
        </Grid.Item>
        <Grid.Item>
          <Avatar imgSrc={img.avatar01} bordered borderWeight="lg" bgColor="gradients_secondary" squared/>
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01} pointer
      bordered borderWeight="sm"
      bgColor="secondary" zoom squared/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      zoom squared/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      text="UI"
      bordered borderWeight="md"
      bgColor="secondary" zoom squared/>
  </Grid.Item>
  <Grid.Item>
    <Avatar
      imgSrc={img.avatar01}
      bordered borderWeight="lg"
      bgColor="gradients_secondary" squared/>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Icons</H2>
      <p><strong>ZEECK-UI</strong> do not provide a default user icon, but you can set a custom icon instead.</p>
      <Grid>
        <Grid.Item>
          <Avatar icon="chevron-right" bgColor="secondary" />
        </Grid.Item>
        <Grid.Item>
          <Avatar icon="chevron-left" zoom squared/>
        </Grid.Item>
        <Grid.Item>
          <Avatar icon="chevron-down" bgColor="gradients_error"/>
        </Grid.Item>
      </Grid>
      <ExampleCode>{`<Grid>
  <Grid.Item>
    <Avatar icon="link" bgColor="secondary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar icon="link" zoom squared/>
  </Grid.Item>
  <Grid.Item>
    <Avatar icon="link" bgColor="gradients_error"/>
  </Grid.Item>
</Grid>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Props</H2>
      <Table>
        <Row
          attribute="bgColor"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">background colors</Anchor>}
          description="Change the border color"
          defaultValue={<Code>transparent</Code>} />
        <Row
          attribute="bordered"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Set the border property"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="borderWeight"
          type={<Code>string</Code>}
          values={<Anchor as={Link} to="#sizes">Sizes</Anchor>}
          description="Set the border size"
          defaultValue={<Code>md</Code>} />
        <Row
          attribute="icon"
          type={<Code>string</Code>}
          values={<Anchor as={Link} to="/icons">Icons</Anchor>}
          description="Show an icon"
          defaultValue={"-"} />
        <Row
          attribute="imgSrc"
          type={<Code>string</Code>}
          values="-"
          description="Image url"
          defaultValue="-" />
        <Row
          attribute="pointer"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the cursor to pointer"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="size"
          type={<Code>string</Code>}
          values={<Anchor as={Link} to="#sizes">Sizes</Anchor>}
          description="Display the underline text only in the hover status"
          defaultValue={<Code>md</Code>} />
        <Row
          attribute="squared"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the border radius"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="text"
          type={<Code>string</Code>}
          values="-"
          description="Display text"
          defaultValue="-" />
        <Row
          attribute="textAlt"
          type={<Code>string</Code>}
          values="-"
          description="Display text when the image is missing or loading"
          defaultValue="-" />
        <Row
          attribute="textColor"
          type={<Code>string</Code>}
          values={<Anchor href="#textColors">text colors</Anchor>}
          description="Change font color"
          defaultValue={<Code>inherit</Code>} />
        <Row
          attribute="zoom"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Enable zoom property on avatar"
          defaultValue={<Code>false</Code>} />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="textColor options" constName="colors" id="textColors"/>
      <Types title="bgColor options" constName="backgrounds" id="bgColor"/>
      <Types title="size and borderWeight options" constName="weights" id="sizes"/>
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Container.Row>
    
    
    
    
    
    
    
    
    
  </Layout>
)