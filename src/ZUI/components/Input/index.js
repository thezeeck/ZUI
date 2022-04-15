import { InputContainer } from "./style"

export const Input = props => {
  return (
    <InputContainer {...props}>
      <input placeholder={props.placeholder} type={props.type} value={props.value} disabled={props.disabled} />
      {props.label && <span>{props.label}</span>}
    </InputContainer>
  );
}

Input.defaultProps = {
  type: "text",
  variant: "shadow",
  color: "gray",
  disabled: false,
}