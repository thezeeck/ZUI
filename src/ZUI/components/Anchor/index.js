import { AnchorUI, IconWrapper } from "./styles";
import { useThemeContext } from "../Theme";
import { Icon } from "../Icons";

export const Anchor = (props) => {
  const { theme } = useThemeContext();
  return (
  <AnchorUI href={props.link} {...props} theme={theme}>
    {props.children}
    {props.icon && <IconWrapper><Icon name={props.icon === true ? "link" : props.icon}/></IconWrapper>}
  </AnchorUI>)
}

Anchor.defaultProps = {
  link: "#",
  text_color: "primary"
}