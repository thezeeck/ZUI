import { InputContainer, LabelUI, ErrorMessage, InputWrapper } from "./style";
import { Icon } from "../Icons";
import { Button } from "../Button";

export const Input = props => {
  const inputProps = {...props};
  delete inputProps.is_password;
  delete inputProps.error;
  const calculateIconsSize = () => {
    let iconSize;
    if (props.size === "xs") iconSize = "xs";
    if (props.size === "sm") iconSize = "sm";
    if (props.size === "lg") iconSize = "md";
    if (props.size === "xl") iconSize = "lg";
    else iconSize = "md";

    console.log("icon size:", iconSize);

    return iconSize;
    
    
    // if (props.size === "xs") return "xs";
    // if (props.size === "sm") return "sm";
    // if (props.size === "lg") return "md";
    // if (props.size === "xl") return "lg";
    // else return "md"
  }

  return (
  <InputContainer>
    {props.label && <LabelUI is_required={props.required}>{props.label}</LabelUI>}
    <InputWrapper
      color={props.color}
      size={props.size}
      variant={props.variant}
      icon={props.icon}
      type={props.type} >
      <input
        {...inputProps}
        placeholder={props.placeholder ? props.placeholder : props.label} />
      {(props.icon && props.is_password) && <Button size={props.size}><Icon name={props.icon} /></Button>}
      {(props.icon && !props.is_password) && <Icon name={props.icon} size={calculateIconsSize()} />}
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
  error_message: "",
  is_password: false,
}