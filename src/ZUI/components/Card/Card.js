import { CardUI } from "./styles";
import { useThemeContext } from "../Theme";
import { CardProvider } from "./context";

export const Card = props => {
  const { theme } = useThemeContext();

  return (
    <CardProvider state={{
      gap: props.gap,
      bordered: props.bordered,
      withBackground: props.withBackground,
      color: props.color,
    }}>
      <CardUI {...props} theme={theme}>
        {props.children}
      </CardUI>
    </CardProvider>
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
  bordered: false,
  withBackground: false,
}