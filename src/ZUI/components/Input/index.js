import { InputContainer, LabelUI } from "./style"

export const Input = props => {
  return (
    <InputContainer
      color={props.color}
      size={props.size}
      variant={props.variant} >
      {props.label && <><LabelUI>{props.label}</LabelUI><br /></>}
      <input {...props} placeholder={props.placeholder ? props.placeholder : props.label} />
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