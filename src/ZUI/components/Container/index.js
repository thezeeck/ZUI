import { ContainerUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Container = props => {
  const { theme } = useThemeContext();
  return (
    <ContainerUI {...props} theme={theme}>
      {props.children}
    </ContainerUI>
)};

Container.defaultProps = {
  gap: 4,
  wrap: "nowrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "flex-start",
  alignContent: "flex-start",
  flex: false,
}