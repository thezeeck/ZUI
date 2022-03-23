import { ButtonUI } from "./styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";

export const Button = (props) => {
  const { theme } = useThemeContext();
  return (
    <ButtonUI {...props} theme={theme}>
      {props.loading ? <Loading loading={props.loading} /> : props.children}
    </ButtonUI>
  );
}

Button.defaultProps = {
  size: "md",
  color: "primary"
}