import { TextUI } from "./styles";

export const Text = props => {
  return (
    <TextUI {...props}>
      {props.children}
    </TextUI>
  )
}

Text.defaultProps = {
  textColor: "inherit",
  decoration: "none",
  icon: false,
  display: "inline",
}