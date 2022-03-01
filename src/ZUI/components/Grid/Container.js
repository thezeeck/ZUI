import { GridContainer } from "./styles"

export const Container = props => {
  return (
  <GridContainer {...props}>
    {props.children}
  </GridContainer>
)}

Container.defaultProps = {
  gap: "1rem",
  wrap: "wrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "flex-start",
  alignContent: "flex-start",
}