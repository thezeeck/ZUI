import { ItemContent, ItemUI, ItemTitle } from "./styles";
import { useRef } from "react";
import { useCollapseContext } from "./context";
import { randomId } from "../../utils";

export const Item = (props) => {
  const headerRef = useRef();
  const { state, setNewState } = useCollapseContext();
  const itemId = randomId("Collapse_Item");
  const isExpanded = state.expanded.some(id => id === itemId);
  console.log(state);
  const handleKey = event => {
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
      setNewState(itemId);
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
        onClick={() => {setNewState(itemId)}}
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