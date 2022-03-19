import { Avatar, Anchor, Grid } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, ExampleCode, HTMLCode } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { img } from "../constant";

export const AvatarContent = () => (
  <Layout>
    <H1>Avatar</H1>
      <p>
        The Avatar <Code>{`<Avatar>`}</Code> component is used to represent an app user, and displays the profile picture, initials or an icon.
      </p>
      <ExampleCode icon="copy" code="import { Avatar } from 'zeeck-ui' ;" />
      <H2>Default</H2>
      <p>
        The default Avatar can be used by passing an image url (<Code>imgSrc</Code>), text (<Code>text</Code>) or an icon (<Code>icon</Code>) .
      </p>
      <p>
        <Avatar text="JS" />
      </p>
      <HTMLCode icon="copy" code={`<Avatar text="JS" />;`} />
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
      <HTMLCode icon="copy" code={`<Grid.Container>
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
</Grid.Container>`} />
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
      <HTMLCode icon="copy" code={`<Grid.Container>
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
</Grid.Container>`} />
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
      <HTMLCode icon="copy" code={`<Grid.Container>
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
</Grid.Container>`} />
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
      <HTMLCode icon="copy" code={`<Grid.Container>
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
</Grid.Container>`} />
      <H2>Zoom</H2>
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
      <HTMLCode icon="copy" code={`<Grid.Container>
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
</Grid.Container>`} />
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
      <HTMLCode icon="copy" code={`<Grid.Container>
    <Grid.Item>
      <Avatar icon="link" bgColor="secondary"/>
    </Grid.Item>
    <Grid.Item>
      <Avatar icon="link" zoom squared/>
    </Grid.Item>
    <Grid.Item>
      <Avatar icon="link" bgColor="gradients_error"/>
    </Grid.Item>
  </Grid.Container>`} />
      <H2>APIs</H2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Type</th>
            <th>Accepted values</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>textColor</strong>
            </td>
            <td>
              <Code>string</Code>
            </td>
            <td>
              <Anchor href="#anchorColors">LinkColors</Anchor>
            </td>
            <td>Change link color and background (if block was set)</td>
            <td>
              <Code>primary</Code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>href</strong>
            </td>
            <td>
              <Code>string</Code>
            </td>
            <td>-</td>
            <td>Link url</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <strong>icon</strong>
            </td>
            <td>
              <Code>boolean</Code> <Code>string</Code>
            </td>
            <td>
              <Code>true/false</Code>
              <Anchor as={Link} to="/icons">Icons</Anchor>
            </td>
            <td>Show an icon</td>
            <td>
              <Code>false</Code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>decoration</strong>
            </td>
            <td>
              <Code>boolean</Code>
            </td>
            <td>
              <Code>true/false</Code>
            </td>
            <td>Display the underline text only in the hover status</td>
            <td>
              <Code>false</Code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>box</strong>
            </td>
            <td>
              <Code>boolean</Code>
            </td>
            <td>
              <Code>true/false</Code>
            </td>
            <td>Change the display to inline-block</td>
            <td>
              <Code>false</Code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>style</strong>
            </td>
            <td>-</td>
            <td>Any valid CSS rule</td>
            <td>Override Default CSS rules</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
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
    <h1 id="avatarWidget">Avatar</h1>
    <section>
      <Avatar
        text="JS"
        size="xs"
        bgColor="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
      <Avatar
        text="JS"
        size="sm"
        bgColor="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
      
      <Avatar
        text="LA"
        size="lg"
        textColor="#000"
        bgColor="#c1c1c1"
        className="lupita lupita-clase"
      />
      <Avatar
        text="JS"
        size="xl"
        css={{"background-color": "red"}}
        bgColor="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
    </section>
    <section>
      <Avatar
        imgSrc="https://nextui.org/avatars/avatar-6.png"
        size="xs"
        css={{"background-color": "red"}}
        bgColor="#f1f1f1"
        textAlt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        text="JS"
        size="sm"
        bordered
        bgColor="#dbc8f0"
        zoom
        squared
        textAlt="Example of avatar"
        textColor="#000"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        imgSrc="https://pixy.org/src/21/219269.jpg"
        size="md"
        zoom
        squared
        textAlt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        imgSrc="https://nextui.org/avatars/avatar-6.png"
        size="lg"
        bordered
        squared
        bgColor="#7928ca"
        textAlt="Example of avatar"
        textColor="white"
        borderWeight="sm"
      />
      <Avatar
        imgSrc="https://nextui.org/avatars/avatar-6.png"
        size="xl"
        text="JS"
        bordered
        bgColor="linear-gradient(135deg, rgba(250,250,110,1) 0%, rgba(0,141,140,1) 100%)"
        zoom
        textAlt="Example of avatar"
        textColor="black"
        borderWeight="xl"
        pointer
        squared
      />
    </section>
  </Layout>
)