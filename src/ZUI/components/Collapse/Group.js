import { useState, Children, cloneElement } from "react";
import { GroupUI } from "./styles";

export const Group = (props) => {
  let indexLoop = 0;
  let initialState = {};
  Children.map(props.children, () => {
    indexLoop++;
    initialState[indexLoop] = indexLoop === props.expanded;
  }); 
  const [state, setState] = useState(initialState);
  const handleClick = item => {
    console.log(state);
    if (props.accordion) {
      let newState = {};
      for (const key in state) {
        if (item == key) newState[key] = !state[key];
        else newState[key] = false;
      }
      setState({...state, ...newState});
    } else {
      setState({...state, ...{[item]: !state[item]}});
    }
  }
  indexLoop = 0;
  const childrenWithState = Children.map(props.children, child => {
    indexLoop++;
    initialState[indexLoop] = indexLoop === props.expanded;
    return cloneElement(child, {
      state,
      handleClick,
      id: indexLoop,
      animated: props.animated,
      gap: props.gap
    });
  }); 
  
  
  return (
    <GroupUI {...props}>{childrenWithState}</GroupUI>
  )
};

Group.defaultProps = {
  accordion: true,
  animated: false,
  gap: 4,
  divider: false,
  bordered: false,
  shadow: true,
  borderWeight: "md",
  expanded: 0,
}