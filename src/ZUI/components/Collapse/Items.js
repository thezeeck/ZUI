import { ItemContent, ItemUI, ItemTitle } from "./styles";
import { useRef } from "react";
import { useCollapseContext } from "./context";

export const Item = (props) => {
  const headerRef = useRef();
  const { state, setNewState } = useCollapseContext();
  const isExpanded = state.expanded.some(id => id === props.id);
  console.log(state);
  const handleKey = event => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
      setNewState(props.id);
      return false;
    }
  }

  return (
    <ItemUI {...props}>
      <ItemTitle
        tabIndex="0"
        role="button"
        aria-expanded={isExpanded}
        aria-disabled={props.disabled}
        data-state={isExpanded ? "open" : "closed"}
        onClick={() => {setNewState(props.id)}}
        onKeyUp={(event) => {handleKey(event)}}
        ref={headerRef}>
        <h3>{props.title}<span>X</span></h3>
      </ItemTitle>
      <ItemContent className={isExpanded && "open"}>
        <div>
          {props.children}
        </div>
      </ItemContent>
    </ItemUI>
  );
};