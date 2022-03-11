import { Avatar } from "../ZUI";
import { Layout } from "../components/Layout";

export const AvatarContent = () => (
  <Layout>
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
        text="JS"
        size="md"
        style={{"backgroundColor": "red"}}
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