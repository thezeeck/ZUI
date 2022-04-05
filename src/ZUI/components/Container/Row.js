import { RowUI } from "./styles";
import { useContainerContext } from "./context";

export const Row = props => {
  const { state } = useContainerContext();
  
  return (
    <RowUI {...props} state={state}>
      {props.children}
    </RowUI>
  )
};


Row.defaultProps = {
  size: "auto",
}