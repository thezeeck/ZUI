import { Link } from "react-router-dom";
import { ELinkUI } from "./styles";
import { GetTheme } from "../../ZUI";

export const ELink = ({children, to}) => {
  const theme = GetTheme();
  return (
    <ELinkUI theme={theme}>
      <Link to={to}>{children}</Link>
    </ELinkUI>
  )
}