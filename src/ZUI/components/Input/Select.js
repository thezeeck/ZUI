import { useState } from "react";
import {
  SelectUI,
  InputContainer,
  LabelUI,
  InputWrapper,
  HelpMessage,
  ErrorMessage,
} from "./style";
import { DropDownMenuPortal } from "../DropDownMenu";

export const Select = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({});
  const handleClick = (e) => {
    const getPosition = e.target.getBoundingClientRect();
    setIsExpanded(!isExpanded);
    setPosition(getPosition);
  };
  const buttonProps = { ...props };
  delete buttonProps.children;

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
        <SelectUI
          {...buttonProps}
          tabIndex="0"
          role="button"
          aria-expanded={isExpanded}
          aria-disabled={props.disabled}
          data-state={isExpanded ? "open" : "closed"}
          onClick={handleClick}
        >
          {props.label ? props.label : "Select an option"}
        </SelectUI>
      </InputWrapper>
      {props.help_text && <HelpMessage>{props.help_text}</HelpMessage>}
      {props.error && <ErrorMessage>{props.error_message}</ErrorMessage>}
      {isExpanded && (
        <DropDownMenuPortal position={position} close={setIsExpanded}>
          {props.children}
        </DropDownMenuPortal>
      )}
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
