import { ButtonUI, ButtonContentUI, IconWrapper } from "./styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";
import { Icon } from "../Icons";

export const Button = (props) => {
  const { theme } = useThemeContext();
  
  return (
    <ButtonUI {...props} theme={theme} disabled={props.disabled}>
      {props.loading ?
        <Loading loading={props.loading} /> :
        <ButtonContentUI
          size={props.size}
          rounded={props.rounded}
          variant={props.variant} >
            <span>{props.children}</span>
            {props.icon && <IconWrapper haveChildren={props.children ? true : false}>
              <Icon name={props.icon} size={props.size}/>
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