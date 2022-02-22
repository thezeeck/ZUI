import { AvatarUI } from "./styles";

export const Avatar = props => {
  const classList = props.className ? props.className.split(" ") : [];
  if (props.zoom) classList.push("zoom");
  return (
    <AvatarUI {...props}>
      <span className="background"></span>
      {props.imgSrc &&
        <figure>
          <img src={props.imgSrc} alt={props.textAlt}/>
        </figure>}
      {props.text && <span className="text">{props.text}</span>}
    </AvatarUI>
  )
}

Avatar.defaultProps = {
  imgSrc: "",
  text: "",
  size: "md",
  bordered: false,
  bgColor: "transparent",
  zoom: false,
  squared: false,
  // icon: "",
  // group: false,
  textAlt: "",
  textColor: "#fff",
  borderWeight: "normal",
  pointer: false,
}