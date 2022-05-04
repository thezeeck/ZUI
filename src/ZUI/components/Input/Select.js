// import { useState } from "react";
import {
  SelectUI,
  InputContainer,
  LabelUI,
  InputWrapper,
  HelpMessage,
  ErrorMessage,
} from "./style";
import {} from "./style";

export const Select = (props) => {
  return (
    <InputContainer>
      {props.label && (
        <LabelUI is_required={props.required}>{props.label}</LabelUI>
      )}
      <InputWrapper
        color={props.color}
        size={props.size}
        variant={props.variant}
        icon={props.icon}
        type={props.type}
        is_password={props.is_password}
      >
        <SelectUI {...props} zui_component />
      </InputWrapper>
      {props.help_text && <HelpMessage>{props.help_text}</HelpMessage>}
      {props.error && <ErrorMessage>{props.error_message}</ErrorMessage>}
    </InputContainer>
  );
};

Select.defaultProps = {
  type: "select",
  variant: "default",
  color: "gray",
  disabled: false,
  size: "md",
  required: false,
  error: false,
  error_message: "",
  is_password: false,
  clearable: false,
};
