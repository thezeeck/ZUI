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
  textAlt: "",
  pointer: false,
  variant: "shadow",
  gap: 4,
  color: "gray",
}