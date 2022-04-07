import { HeaderUI } from "./styles";
import { useCardContext } from "./context";

export const Header = props => {
  const { state } = useCardContext();
  if (state.bordered) console.log("bordered true");
  return (
    <HeaderUI {...props} state={state}>{props.children}</HeaderUI>
  )
};