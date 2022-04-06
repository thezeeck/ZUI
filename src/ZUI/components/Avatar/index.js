import { AvatarUI, Background } from "./styles";
import { useThemeContext } from "../Theme";
import { Icon } from "../Icons";

export const Avatar = props => {
  const { theme } = useThemeContext();
  return (
    <AvatarUI {...props} textColor={props.textColor} theme={theme}>
      <Background theme={theme} {...props}></Background>
      {props.imgSrc &&
        <figure>
          <img src={props.imgSrc} alt={props.textAlt}/>
        </figure>}
      {props.text && <span className="text" {...props}>{props.text}</span>}
      {props.icon !== "" && <span className="text icon" {...props}><Icon name={props.icon}/></span>}
    </AvatarUI>
  )
}

Avatar.defaultProps = {
  size: "md",
  bordered: false,
  zoom: false,
  squared: false,
  icon: "",
  // group: false,
  borderWeight: "md",
  pointer: false,
  textColor: "inherit",
  transition: "regular"
}