import { IconContainer } from "./styles";

export const Icon = ({ name, size }) => {
  console.log("size icon", size);
  return (
    <IconContainer size={size}>
      <i className={`ZUI-icon ZUI-${name}`}></i>
    </IconContainer>
)};

Icon.defaultProps = {
  size: "md",
}