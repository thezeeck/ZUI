import { Children, cloneElement } from "react";
import { GroupUI } from "./styles";
import { CollapseProvider } from "./context";

export const Collapse = (props) => {
  let indexLoop = 0;
  const childrenWithState = Children.map(props.children, child => {
    indexLoop++;
    return cloneElement(child, {id: indexLoop});
  }); 
  return (
    <CollapseProvider state={{
      expanded: [],
      animated: props.animated,
      gap: props.gap,
      accordion: props.accordion,
    }}>
      <GroupUI {...props}>{childrenWithState}</GroupUI>
    </CollapseProvider>
  )
};

Collapse.defaultProps = {
  accordion: true,
  animated: false,
  gap: 4,
  divider: false,
  bordered: true,
  shadow: true,
  borderWeight: "md",
  expanded: 0,
}