import { AvatarUI } from "./styles";

export const Avatar = ({
  src = "",
  text = "",
  size = "m",
  css = "",
  bordered = false,
  color = "transparent",
  zoom = false,
  squared = false,
  icon = "",
  group = false,
  alt = "",
  textColor = "",
  borderWeight = ".35rem",
  pointer = false,
}) => {
  return (
    <AvatarUI size={size} color={color}>
      <span></span>
      {src &&
        <figure>
          <img src={src} alt={alt}/>
        </figure>}
      {text && <span className="text">{text}</span>}
    </AvatarUI>
  )
}