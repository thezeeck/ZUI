import { ContainerUI } from "./styles";

export const Container = props => {
  return (
    <ContainerUI {...props}>
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