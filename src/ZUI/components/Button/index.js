import { ButtonUI, ButtonContentUI } from "./styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";

export const Button = (props) => {
  const { theme } = useThemeContext();
  return (
    <ButtonUI {...props} theme={theme}>
      {props.loading ? <Loading loading={props.loading} /> : <ButtonContent icon={props.icon}>{props.children}</ButtonContent>}
    </ButtonUI>
  );
}

const ButtonContent = ({children, icon}) => {
  if (icon) return <ButtonContentUI><span>{children}</span><i>icon</i></ButtonContentUI>
  return <ButtonContentUI><span>{children}</span></ButtonContentUI>
}

Button.defaultProps = {
  size: "md",
  color: "primary",
  variant: "filled",
}