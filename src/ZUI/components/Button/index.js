import { ButtonUI } from "./styles";

export const Button = (props) => {
  return (
    <ButtonUI {...props}>
      {props.children}
    </ButtonUI>
  );
}