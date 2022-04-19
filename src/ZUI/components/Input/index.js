import { InputContainer, LabelUI } from "./style";
import { useState } from "react";

export const Input = props => {
  const [isValid, setIsValid] = useState(props.required && !props.value);

  console.log(props.required, props.value);

  console.log(isValid);

  return (
    <InputContainer
      color={props.color}
      size={props.size}
      variant={props.variant} >
      {props.label && <><LabelUI is_required={props.required}>{props.label}</LabelUI><br /></>}
      <input
        {...props}
        placeholder={props.placeholder ? props.placeholder : props.label}
        required={props.required} />
      {isValid && <span>Error!</span>}
    </InputContainer>
  );
}

Input.defaultProps = {
  type: "text",
  variant: "default",
  color: "gray",
  disabled: false,
  size: "md",
  required: false,
}