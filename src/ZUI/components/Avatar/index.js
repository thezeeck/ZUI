import { AvatarUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Avatar = props => {
  const classList = props.className ? props.className.split(" ") : [];
  const { theme } = useThemeContext();
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
  borderWeight: "md",
  pointer: false,
  textColor: "inherit",
  transition: "regular"
}