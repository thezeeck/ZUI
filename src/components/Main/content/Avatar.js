import { Avatar } from "../../../ZUI";

export const AvatarContent = () => (
  <div>
    <h1 id="avatarWidget">Avatar</h1>
    <section>
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        text="Avatar"
        size="xs"
        css={{"background-color": "red"}}
        bordered
        color="#f1f1f1"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        text="Avatar"
        size="sm"
        css={{"background-color": "red"}}
        bordered
        color="#f1f1f1"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        src="https://pixy.org/src/21/219269.jpg"
        text="Avatar"
        size="md"
        css={{"background-color": "red"}}
        bordered
        color="#f1f1f1"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        text="Avatar"
        size="lg"
        css={{"background-color": "red"}}
        bordered
        color="#f1f1f1"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
      <Avatar
        src="https://nextui.org/avatars/avatar-6.png"
        text="Avatar"
        size="xl"
        css={{"background-color": "red"}}
        bordered
        color="#f1f1f1"
        zoom
        squared
        alt="Example of avatar"
        textColor="white"
        borderWeight=".25rem"
        pointer
      />
    </section>
  </div>
)