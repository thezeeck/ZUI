import { AnchorUI } from "./styles"

export const Anchor = (props) => {
  return (
  <AnchorUI href={props.link} {...props}>
    {props.children}
  </AnchorUI>)
}

Anchor.defaultProps = {
  textColor: "inherit",
  link: "#",
  decoration: "none",
  icon: false,
  display: "inline"
}