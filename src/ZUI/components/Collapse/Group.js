import { useState, Children, cloneElement } from "react";
import { GroupUI } from "./styles";
import { CollapseProvider } from "./context";

export const Collapse = (props) => {
  return (
    <CollapseProvider state={{
      expanded: [],
      animated: props.animated,
      gap: props.gap,
      accordion: props.accordion,
    }}>
      <GroupUI {...props}>{props.children}</GroupUI>
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