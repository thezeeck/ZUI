import { InputContainer, LabelUI } from "./style"

export const Input = props => {
  return (
    <InputContainer {...props}>
      {props.label && <><LabelUI>{props.label}</LabelUI><br /></>}
      <input
        placeholder={props.placeholder ? props.placeholder : props.label}
        type={props.type}
        value={props.value}
        disabled={props.disabled}
        color={props.color} />
    </InputContainer>
  );
}

Input.defaultProps = {
  type: "text",
  variant: "shadow",
  color: "gray",
  disabled: false,
  size: "md",
}