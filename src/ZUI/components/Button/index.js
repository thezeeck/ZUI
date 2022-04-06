import { ButtonUI, ButtonContentUI, IconWrapper } from "./styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";
import { Icon } from "../Icons";

export const Button = (props) => {
  const { theme } = useThemeContext();
  const calculateIconsSize = () => {
    if (props.size === "xs") return "xs";
    if (props.size === "sm") return "sm";
    if (props.size === "lg") return "md";
    if (props.size === "xl") return "lg";
    else return "md"
  }
  
  return (
    <ButtonUI {...props} theme={theme} disabled={props.disabled}>
      {props.loading ?
        <Loading loading={props.loading} /> :
        <ButtonContentUI
          size={props.size}
          rounded={props.rounded}
          variant={props.variant}>
            <span>{props.children}</span>
            {props.icon && <IconWrapper>
              <Icon name={props.icon} size={calculateIconsSize()}/>
            </IconWrapper>}
        </ButtonContentUI>}
    </ButtonUI>
  );
}

Button.defaultProps = {
  size: "md",
  color: "primary",
  variant: "filled",
  rounded: false,
  disabled: false,
}