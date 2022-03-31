import { Collapse, Container, Avatar } from "../ZUI";
import { Anchor } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode } from "../components/StyledComponents";
import { Link } from "react-router-dom";
import { Types } from "../components/StyledComponents/types";

export const CollapseContent = () => (
    <Layout>
      <H1>Collapse</H1>
      <p>
        The collapse <Code>Collapse</Code> component allows the user to show and hide portions of content in the application.
      </p>
      <ExampleCode lang='javascript'>
        {`import { Collapse } from "zeeck-ui";`}
      </ExampleCode>
      <H2>Basic collapse</H2>
      <p>
        All collapse <Code>Collapse</Code> component needs at least one Item <Code>Collapse.Item</Code>.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A">
            1 Lorem ipsum dolor sit amet
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
      <H2>Disable accordion property</H2>
      <p>If you disable the accordion <Code>accordion</Code> property you can show multiple items at the same time</p>
      <Container>
        <Collapse accordion={false}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse accordion={false}>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
      <H2>Initial expanded</H2>
      <p>You can set a expanded <Code>expanded</Code> item by default.</p>
      <Container>
        <Collapse expanded={1}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse expanded={1}>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
      <H2>Subtitle</H2>
      <p>You can set a subtitle <Code>subtitle</Code> that will appear below the title.</p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A" subTitle="Subtitle A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B" subTitle="Subtitle B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C" subTitle="Subtitle C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse expanded={1}>
  <Collapse.Item title="Title A" subTitle="Subtitle A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B" subTitle="Subtitle B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C" subTitle="Subtitle C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
      <H2>Filled background and shadow</H2>
      <p>You can change the collapse <Code>collapse</Code> component style setting the filled <Code>filled</Code> property.</p>
      <Container>
        <Collapse filled>
          <Collapse.Item title="Title A" subTitle="Subtitle A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B" subTitle="Subtitle B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C" subTitle="Subtitle C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse expanded={1}>
  <Collapse.Item title="Title A" subTitle="Subtitle A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B" subTitle="Subtitle B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C" subTitle="Subtitle C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A" subTitle="Subtitle A" sideContent={<Avatar text="JS" />}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Quis ipsum suspendisse ultrices gravida dictum. Amet mattis vulputate enim nulla. Gravida arcu ac tortor dignissim convallis aenean et. Arcu non sodales neque sodales ut. Nam libero justo laoreet sit amet cursus sit amet. Senectus et netus et malesuada fames. Leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate ut pharetra sit amet. Fermentum iaculis eu non diam. Praesent semper feugiat nibh sed.
            </p>
          </Collapse.Item>
          <Collapse.Item title="Title B">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Quis ipsum suspendisse ultrices gravida dictum. Amet mattis vulputate enim nulla. Gravida arcu ac tortor dignissim convallis aenean et. Arcu non sodales neque sodales ut. Nam libero justo laoreet sit amet cursus sit amet. Senectus et netus et malesuada fames. Leo a diam sollicitudin tempor id. Amet justo donec enim diam vulputate ut pharetra sit amet. Fermentum iaculis eu non diam. Praesent semper feugiat nibh sed.
            </p>
          </Collapse.Item>
          <Collapse.Item title="Title C">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Collapse.Item>
        </Collapse>
      </Container>
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
