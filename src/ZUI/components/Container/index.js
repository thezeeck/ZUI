import { ContainerUI, RowUI } from "./styles";
import { useThemeContext } from "../Theme";

export const Container = props => {
  const { theme } = useThemeContext();
  return (
    <ContainerUI {...props} theme={theme}>
      {props.children}
    </ContainerUI>
)};

Container.Row = props => (
    <RowUI {...props}>
      {props.children}
    </RowUI>
);

Container.defaultProps = {
  gap: 4,
  wrap: "nowrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "flex-start",
  alignContent: "flex-start",
  flex: false,
  size: 5,
}