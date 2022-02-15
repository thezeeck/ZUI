import { Avatar } from "../../../ZUI";

export const AvatarContent = () => (
  <div>
    <h1 id="avatarWidget">Avatar</h1>
    <section>
      <Avatar
        text="JS"
        size="xs"
        css={{"background-color": "red"}}
        color="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
      <Avatar
        text="JS"
        size="sm"
        css={{"background-color": "red"}}
        color="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
      <Avatar
        text="JS"
        size="md"
        css={{"background-color": "red"}}
        color="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
      <Avatar
        text="LA"
        size="lg"
        textColor="#000"
        color="#c1c1c1"
        className="lupita lupita-clase"
      />
      <Avatar
        text="JS"
        size="xl"
        css={{"background-color": "red"}}
        color="#f1f1f1"
        textColor="#000"
        pointer
        zoom
      />
    </section>
    <section>
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        size="xs"
        css={{"background-color": "red"}}
        color="#f1f1f1"
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        text="JS"
        size="sm"
        bordered
        color="#dbc8f0"
        zoom
        squared
        alt="Example of avatar"
        textColor="#000"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        src="https://pixy.org/src/21/219269.jpg"
        size="md"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        size="lg"
        bordered
        squared
        color="#7928ca"
        alt="Example of avatar"
        textColor="white"
        borderWeight="normal"
      />
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        size="xl"
        text="JS"
        bordered
        color="linear-gradient(135deg, rgba(250,250,110,1) 0%, rgba(0,141,140,1) 100%)"
        zoom
        alt="Example of avatar"
        textColor="white"
        borderWeight="black"
        pointer
        squared
      />
    </section>
  </div>
)