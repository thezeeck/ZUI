import { Avatar, Anchor, Grid } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { img } from "../constant";

export const AvatarContent = () => (
  <Layout>
    <H1>Avatar</H1>
      <p>
        The Avatar <Code>{`<Avatar>`}</Code> component is used to represent an app user, and displays the profile picture, initials or an icon.
      </p>
      <ExampleCode lang="javascript">
        {`import { Avatar } from "zeeck-ui";`}
      </ExampleCode>
      <H2>Default</H2>
      <p>
        The default Avatar can be used by passing an image url (<Code>imgSrc</Code>), text (<Code>text</Code>) or an icon (<Code>icon</Code>) .
      </p>
      <p>
        <Avatar text="JS" />
      </p>
      <ExampleCode>
        {`<Avatar text="JS" />`}
      </ExampleCode>
      <H2>Sizes</H2>
      <Grid.Container>
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
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
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
</Grid.Container>`}</ExampleCode>
      <H2>Colors</H2>
      <Grid.Container>
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
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
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
</Grid.Container>`}</ExampleCode>
      <H2>Border</H2>
      <Grid.Container>
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
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
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
</Grid.Container>`}</ExampleCode>
      <H2>Zoom</H2>
      <Grid.Container>
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
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
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
</Grid.Container>`}</ExampleCode>
      <H2>Squared</H2>
      <Grid.Container>
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
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
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
</Grid.Container>`}</ExampleCode>
      <H2>Icons</H2>
      <Grid.Container>
        <Grid.Item>
          <Avatar icon="link" bgColor="secondary"/>
        </Grid.Item>
        <Grid.Item>
          <Avatar icon="link" zoom squared/>
        </Grid.Item>
        <Grid.Item>
          <Avatar icon="link" bgColor="gradients_error"/>
        </Grid.Item>
      </Grid.Container>
      <ExampleCode>{`<Grid.Container>
  <Grid.Item>
    <Avatar icon="link" bgColor="secondary"/>
  </Grid.Item>
  <Grid.Item>
    <Avatar icon="link" zoom squared/>
  </Grid.Item>
  <Grid.Item>
    <Avatar icon="link" bgColor="gradients_error"/>
  </Grid.Item>
</Grid.Container>`}</ExampleCode>
      <H2>APIs</H2>
      <Table>
        <Row
          attribute="bgColor"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">background colors</Anchor>}
          description="Change the border color"
          defaultValue={<><Code>transparent</Code> for avatars with the <strong>imgSrc</strong> property and <strong>textColor</strong> for text avatars</>} />
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
          type={<><Code>boolean</Code> <Code>string</Code></>}
          values={<><Code>true/false</Code> <Anchor as={Link} to="/icons">Icons</Anchor></>}
          description="Show an icon"
          defaultValue={<Code>false</Code>} />
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
          attribute="style"
          type="-"
          values="Any valid CSS rule"
          description="Override Default CSS rules"
          defaultValue="-" />
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
      <H2>Types</H2>
      <h3 id="textColors">textColor options</h3>
      <ExampleCode noCopy lang="javascript">{`const textColors =
  | 'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';`}</ExampleCode>
      <h3 id="bgColor">bgColor options</h3>
      <ExampleCode noCopy lang="javascript">{`const bgColor =
  | 'text'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error',
  | 'gradients_text'
  | 'gradients_primary'
  | 'gradients_secondary'
  | 'gradients_success'
  | 'gradients_warning'
  | 'gradients_error';`}</ExampleCode>
      <h3 id="sizes">size and borderWeight options</h3>
      <ExampleCode noCopy lang="javascript">{`const size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xg';`}</ExampleCode>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
  </Layout>
)