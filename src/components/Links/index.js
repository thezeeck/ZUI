import { Link } from "react-router-dom";
import { ELinkUI } from "./styles";
import { useGetTheme } from "../../ZUI";

export const ELink = ({children, to}) => {
  const theme = useGetTheme();
  return (
    <ELinkUI theme={theme}>
      <Link to={to}>{children}</Link>
    </ELinkUI>
  )
}