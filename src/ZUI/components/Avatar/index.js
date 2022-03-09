import { useThemeContext } from "../Theme";
import { AvatarUI } from "./styles";

export const Avatar = props => {
  const { theme } = useThemeContext();
  const classList = props.className ? props.className.split(" ") : [];
  if (props.zoom) classList.push("zoom");
  return (
    <AvatarUI {...props} textColor={props.textColor} theme={theme}>
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
  textColor: "inherit"
}