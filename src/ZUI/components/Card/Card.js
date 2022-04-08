import { CardUI, ContentUI } from "./styles";
import { useThemeContext } from "../Theme";
import { CardProvider } from "./context";
import { Cover } from "./Cover";

export const Card = props => {
  const { theme } = useThemeContext();

  return (
    <CardProvider state={{
      gap: props.gap,
      bordered: props.bordered,
      ghost: props.ghost,
      color: props.color,
    }}>
      <CardUI {...props} theme={theme}>
        {props.cover && <Cover content={props.cover} />}
        <ContentUI>
          {props.children}
        </ContentUI>
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