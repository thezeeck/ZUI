import { InputContainer, LabelUI, ErrorMessage, InputWrapper } from "./style";
import { Icon } from "../Icons";

export const Input = props => {  
  return (
  <InputContainer>
    {props.label && <LabelUI is_required={props.required}>{props.label}</LabelUI>}
    <InputWrapper
      color={props.color}
      size={props.size}
      variant={props.variant}
      icon={props.icon} >
      <input
        {...props}
        placeholder={props.placeholder ? props.placeholder : props.label}
        required={props.required}
        error={props.error.toString()} />
      {props.icon && <Icon name={props.icon} />}
    </InputWrapper>
    {props.error && <ErrorMessage>{props.error_message}</ErrorMessage>}
  </InputContainer>
)};

Input.defaultProps = {
  type: "text",
  variant: "default",
  color: "gray",
  disabled: false,
  size: "md",
  required: false,
  error: false,
  error_message: ""
}