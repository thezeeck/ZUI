import { AvatarUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Avatar = props => {
  const { theme } = useThemeContext();
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
  size: "md",
  bordered: false,
  zoom: false,
  squared: false,
  // icon: "",
  // group: false,
  borderWeight: "md",
  pointer: false,
  textColor: "inherit",
  transition: "regular"
}