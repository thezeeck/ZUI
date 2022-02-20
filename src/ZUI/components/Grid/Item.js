import { GridItem } from "./styles";

export const Item = props => {
  const xs = props.xs;
  const sm = props.sm ? props.sm : xs;
  const md = props.md ? props.md : sm;
  const lg = props.lg ? props.lg : md;
  const xl = props.xl ? props.xl : lg;

  return (
  <GridItem className="grid-item"
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    {...props}
  >
    {props.children}
  </GridItem>
)};

Item.defaultProps = {
  xs: 12
}