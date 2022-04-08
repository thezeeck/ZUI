import { CardUI } from "./styles";
import { useThemeContext } from "../Theme";
import { CardProvider } from "./context";
import { Cover } from "./Cover";

export const Card = props => {
  const { theme } = useThemeContext();
  const setCover = () => {
    if (typeof props.cover === "string") return (
      <Cover>
        <img src={props.cover} alt="cover" />
      </Cover>
    );
    return (
      <Cover>
        {props.cover}
      </Cover>
    )
  }

  return (
    <CardProvider state={{
      gap: props.gap,
      bordered: props.bordered,
      ghost: props.ghost,
      color: props.color,
    }}>
      <CardUI {...props} theme={theme}>
        {props.cover && setCover()}
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
  ghost: false,
}