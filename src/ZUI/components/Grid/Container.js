import { GridContainer } from "./styles"

export const Container = ({
  children,
  gap = "1rem",
  wrap = "wrap",
  justify = "flex-start",
  direction = "row",
  alignItems = "flex-start",
  alignContent = "flex-start"
}) => (
  <GridContainer
    gap={gap}
    wrap={wrap}
    justify={justify}
    direction={direction}
    alignItems={alignItems}
    alignContent={alignContent}
  >
    {children}
  </GridContainer>
)