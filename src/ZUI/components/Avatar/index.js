import { AvatarUI } from "./styles";

export const Avatar = ({
  src = "",
  text = "",
  size = "md",
  bordered = false,
  color = "transparent",
  zoom = false,
  squared = false,
  // icon = "",
  // group = false,
  alt = "",
  textColor = "",
  borderWeight = "normal",
  pointer = false,
  className,
}) => {
  const classList = className ? className.split(" ") : [];
  if (zoom) classList.push("zoom");
  return (
    <AvatarUI
      size={size}
      color={color}
      textColor={textColor}
      squared={squared}
      bordered={bordered}
      borderWeight={borderWeight}
      pointer={pointer}
      className={classList}>
      <span className="background"></span>
      {src &&
        <figure>
          <img src={src} alt={alt}/>
        </figure>}
      {text && <span className="text">{text}</span>}
    </AvatarUI>
  )
}