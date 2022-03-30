import { GridContainer } from "./styles"

export const Grid = props => {
  return (
  <GridContainer {...props}>
    {props.children}
  </GridContainer>
)}

Grid.defaultProps = {
  gap: 4,
  wrap: "wrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "center",
  alignContent: "center",
}