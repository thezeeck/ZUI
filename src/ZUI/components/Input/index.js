import { InputContainer } from "./style"

export const Input = props => {
  return (
    <InputContainer>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </InputContainer>
  );
}

Input.defaultProps = {
  type: "text",
  variant: "shadow",
}