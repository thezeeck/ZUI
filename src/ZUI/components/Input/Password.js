import { Input } from "./Input";

export const Password = props => {
  return (
  <Input {...props} />
)};

Password.defaultProps = {
  icon: "secure",
  is_password: true,
  type: "password",
}