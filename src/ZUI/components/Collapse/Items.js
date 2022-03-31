import { ItemContent, ItemUI, ItemTitle } from "./styles";
import { useRef } from "react";
import { useCollapseContext } from "./context";
import { Icon } from "../Icons";
import { useThemeContext } from "../Theme";

export const Item = (props) => {
  const headerRef = useRef();
  const { state, setNewState } = useCollapseContext();
  const isExpanded = state.expanded.some(id => id === props.id);
  const { theme } = useThemeContext();
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
        className={isExpanded && "open"}
        ref={headerRef}
        theme={theme}>
        {props.sideContent && <section>{props.sideContent}</section>}
        <h3>{props.title}</h3>
        {props.subTitle && <h4>{props.subTitle}</h4>}
        <div><Icon name="chevron-down" /></div>
      </ItemTitle>
      <ItemContent className={isExpanded && "open"}>
        <div>
          {props.children}
        </div>
      </ItemContent>
    </ItemUI>
  );
};