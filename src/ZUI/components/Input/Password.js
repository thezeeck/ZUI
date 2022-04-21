import { Input } from "./Input";

export const Password = props => {
  console.log(props.type);
  return (
  <Input {...props} />
)};

Password.defaultProps = {
  icon: "secure",
  is_password: true,
  type: "password",
}