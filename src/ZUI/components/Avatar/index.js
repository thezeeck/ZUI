import { AvatarUI, Background } from "./styles";
import { useThemeContext } from "../Theme";
import { Icon } from "../Icons";

export const Avatar = props => {
  const { theme } = useThemeContext();
  return (
    <AvatarUI {...props} textColor={props.textColor} theme={theme}>
      <Background theme={theme} bg_color={props.bg_color} bordered={props.bordered} img_src={props.img_src}></Background>
      {props.img_src &&
        <figure>
          <img src={props.img_src} alt={props.textAlt}/>
        </figure>}
      {props.text && <span className="text" {...props}>{props.text}</span>}
      {props.icon !== "" && <span className="text icon" {...props}><Icon name={props.icon}/></span>}
    </AvatarUI>
  )
}

Avatar.defaultProps = {
  size: "md",
  icon: "",
  // group: false,
  border_weight: "md",
  text_color: "inherit",
  transition: "regular"
}