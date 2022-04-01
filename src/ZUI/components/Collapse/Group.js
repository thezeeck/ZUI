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
      animation: props.animation,
      gap: props.gap,
      accordion: props.accordion,
      variant: props.variant,
      divider: props.divider,
      dividerWeight: props.dividerWeight,
    }}>
      <GroupUI {...props} theme={theme}>{childrenWithState}</GroupUI>
    </CollapseProvider>
  )
};

Collapse.defaultProps = {
  accordion: true,
  animation: true,
  gap: 4,
  divider: true,
  variant: "transparent",
  dividerWeight: "xs",
  expanded: 0,
}