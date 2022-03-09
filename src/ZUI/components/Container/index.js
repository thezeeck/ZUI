import { ContainerUI } from "./styles";
import { useGetTheme } from "../Theme";

export const Container = props => {
  const theme = useGetTheme();
  console.log(theme);
  return (
    <ContainerUI {...props} theme={theme}>
      {props.children}
    </ContainerUI>
)};

Container.defaultProps = {
  gap: "1rem",
  wrap: "nowrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "flex-start",
  alignContent: "flex-start",
  flex: false,
}