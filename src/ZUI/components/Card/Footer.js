import { FooterUI } from "./styles";
import { useCardContext } from "./context";

export const Footer = props => {
  const { state } = useCardContext();
  
  return (
    <FooterUI {...props} state={state}>{props.children}</FooterUI>
  )
};