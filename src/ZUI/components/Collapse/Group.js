import { Children, cloneElement } from "react";
import { GroupUI } from "./styles";
import { CollapseProvider } from "./context";
import { useThemeContext } from "../Theme";

export const Collapse = (props) => {
  let indexLoop = 0;
  const { theme } = useThemeContext();
  const childrenWithState = Children.map(props.children, child => {
    indexLoop++;
    return cloneElement(child, {id: indexLoop});
  });

  return (
    <CollapseProvider state={{
      expanded: props.expanded ? [props.expanded] : [],
      animated: props.animated,
      gap: props.gap,
      accordion: props.accordion,
    }}>
      <GroupUI {...props} theme={theme}>{childrenWithState}</GroupUI>
    </CollapseProvider>
  )
};

Collapse.defaultProps = {
  accordion: true,
  animated: false,
  gap: 4,
  divider: false,
  bordered: true,
  filled: false,
  borderWeight: "md",
  expanded: 0,
}