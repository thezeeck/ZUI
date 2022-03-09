import { Link } from "react-router-dom";
import { ELinkUI } from "./styles";
import { useThemeContext } from "../../ZUI";

export const ELink = ({children, to}) => {
  const { theme } = useThemeContext();
  return (
    <ELinkUI theme={theme}>
      <Link to={to}>{children}</Link>
    </ELinkUI>
  )
}