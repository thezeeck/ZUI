import { AvatarUI } from "./styles";
import { GetTheme } from "../Theme";

export const Avatar = props => {
  const classList = props.className ? props.className.split(" ") : [];
  const { theme } = GetTheme();
  console.log("avatar", theme);
  const textColor = props.textColor ? props.textColor : theme.colors.text;
  console.log(textColor);
  if (props.zoom) classList.push("zoom");
  return (
    <AvatarUI {...props} textColor={textColor}>
      <span className="background"></span>
      {props.imgSrc &&
        <figure>
          <img src={props.imgSrc} alt={props.textAlt}/>
        </figure>}
      {props.text && <span className="text">{props.text}</span>}
    </AvatarUI>
  )
}

Avatar.defaultProps = {
  imgSrc: "",
  text: "",
  size: "md",
  bordered: false,
  bgColor: "transparent",
  zoom: false,
  squared: false,
  // icon: "",
  // group: false,
  textAlt: "",
  borderWeight: "normal",
  pointer: false,
}