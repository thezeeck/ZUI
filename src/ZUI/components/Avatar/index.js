import { AvatarUI } from "./styles";
import { GetTheme } from "../Theme";
import { theme } from "../../../styles/theme";

export const Avatar = props => {
  const classList = props.className ? props.className.split(" ") : [];
  const theme = GetTheme();
  if (props.zoom) classList.push("zoom");
  return (
    <AvatarUI {...props}>
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
  textColor: theme.colors.text,
  borderWeight: "normal",
  pointer: false,
}