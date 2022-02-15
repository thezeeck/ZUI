import { GridItem } from "./styles";

export const Item = ({
  children,
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  xl = 12,
  style = null
}) => (
  <GridItem className="grid-item"
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    style={style}
  >
    {children}
  </GridItem>
)