import { CardUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Card = props => {
  const { theme } = useThemeContext();

  return (
    <CardUI {...props} theme={theme}>
      {props.children}
    </CardUI>
  )
}

Card.defaultProps = {
  radius: "md",
  imgSrc: "",
  text: "",
  bordered: false,
  // icon: "",
  textAlt: "",
  textColor: "inherit",
  borderWeight: "normal",
  pointer: false,
  variant: "gray",
}