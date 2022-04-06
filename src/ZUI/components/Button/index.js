import { ButtonUI, ButtonContentUI } from "./styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";

export const Button = (props) => {
  const { theme } = useThemeContext();
  return (
    <ButtonUI {...props} theme={theme} disabled={props.disabled}>
      {props.loading ?
        <Loading loading={props.loading} /> :
        <ButtonContent
          size={props.size}
          rounded={props.rounded}
          icon={props.icon}
          variant={props.variant}>{props.children}</ButtonContent>}
    </ButtonUI>
  );
}

const ButtonContent = ({children, icon, size, rounded, variant}) => {
  if (icon) return <ButtonContentUI
    size={size}
    rounded={rounded}
    variant={variant}><span>{children}</span><i>icon</i></ButtonContentUI>
  return <ButtonContentUI
    size={size}
    rounded={rounded}
    variant={variant}><span>{children}</span></ButtonContentUI>
}

Button.defaultProps = {
  size: "md",
  color: "primary",
  variant: "filled",
  rounded: false,
  disabled: false,
}