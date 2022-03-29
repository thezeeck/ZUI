import { useState, Children, cloneElement } from "react";
import { GroupUI } from "./styles";

export const Group = (props) => {
  let indexLoop = 0;
  const [state, setState] = useState({});
  const childrenWithState = Children.map(props.children, child => {
    indexLoop++;
    return cloneElement(child, {state, setState, id: indexLoop});
  });
  
  return (
    <GroupUI>{childrenWithState}</GroupUI>
  )
};