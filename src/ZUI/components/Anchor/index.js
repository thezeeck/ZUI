import { AnchorUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Anchor = (props) => {
  const { theme } = useThemeContext();
  return (
  <AnchorUI href={props.link} {...props} theme={theme}>
    {props.children}
  </AnchorUI>)
}

Anchor.defaultProps = {
  link: "#",
  icon: "false",
}