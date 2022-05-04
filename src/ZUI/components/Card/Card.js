import { CardUI, ContentUI } from "./styles";
import { useThemeContext } from "../Theme";
import { CardProvider } from "./context";
import { Cover } from "./Cover";

/**
 * @param props 
 * Name             Type                Default       Description
 * ---------------------------------------------------------------------------------------------
 * bordered         boolean             false         Change the card styles
 * borderedColor    string              sm            Change the Header and Footter border size
 * borderedWeigth   string              gray_3        Change the Header and Footter border color
 * clickable        boolean             false         Adds animations to hover and active states
 * color            string              shadow        Change the card style
 * cover            string / ReactNode  -             Set the cover card section
 * ghost            boolean             false         Change the card styles
 * ghostColor       string              gray_5        Change the background color of the Header and Footer
 * ghostOpacity     number              .1            Change the Header and Footter opacity background
 * variant          string              shadow        Change the card style
 */

export const Card = props => {
  const { theme } = useThemeContext();

  return (
    <CardProvider state={{
      gap: props.gap,
      bordered: props.bordered,
      ghost: props.ghost,
      color: props.color,
      ghostColor: props.ghostColor,
      ghostOpacity: props.ghostOpacity,
      borderedWeigth: props.borderedWeigth,
      borderedColor: props.borderedColor,
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
  img_src: "",
  textAlt: "",
  variant: "shadow",
  gap: 4,
  color: "gray",
  ghostColor: "gray_5",
  ghostOpacity: .1,
  borderedWeigth: "sm",
  borderedColor: "gray_3"
}