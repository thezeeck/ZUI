import { InputContainer } from "./style"

export const Input = props => {
  if (!props.label) console.error("The label property is missing");

  return (
    <InputContainer {...props}>
      <input placeholder={props.placeholder} type={props.type} value={props.value} />
      {props.label && <span>{props.label}</span>}
    </InputContainer>
  );
}

Input.defaultProps = {
  type: "text",
  variant: "shadow",
  color: "gray"
}