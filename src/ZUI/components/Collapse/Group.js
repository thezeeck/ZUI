import { useState, Children, cloneElement } from "react";

export const Group = (props) => {
  const [state, setState] = useState({});
  const childrenWithState = Children.map(props.children, child => 
    cloneElement(child, {state: state, setState: setState})  
  );
  
  return (
    <div>{childrenWithState}</div>
  )
};