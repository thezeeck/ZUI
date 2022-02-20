import { CardUI } from "./styles";

export const Card = props => {
  const classList = props.className ? props.className.split(" ") : [];
  if (props.zoom) classList.push("zoom");
  classList.push("card")
  return (
    <CardUI {...props}>
      {props.children}
    </CardUI>
  )
}

Card.defaultProps = {
  radius: ".5rem",
  imgSrc: "",
  text: "",
  bordered: false,
  bgcolor: "#fff",
  zoom: false,
  // icon: "",
  textAlt: "",
  textColor: "#000",
  borderWeight: "normal",
  pointer: false,
}