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
    <ItemUI {...props}
      theme={theme}
      variant={state.variant}
      divider={state.divider}
      dividerWeight={state.dividerWeight}>

      <ItemTitle
        tabIndex="0"
        role="button"
        aria-expanded={isExpanded}
        aria-disabled={props.disabled}
        data-state={isExpanded ? "open" : "closed"}
        onClick={() => {!props.disabled && setNewState(props.id)}}
        onKeyUp={(event) => {handleKey(event)}}
        className={isExpanded && "open"}
        ref={headerRef}
        theme={theme}
        disabled={props.disabled}
        animation={state.animation}>

        {props.sideContent && <section>{props.sideContent}</section>}
        <h3>{props.title}</h3>
        {props.subTitle && <h4>{props.subTitle}</h4>}
        <div><Icon name={props.icon} /></div>
      </ItemTitle>
      <ItemContent className={isExpanded && "open"} animation={state.animation}>
        <div>
          {props.children}
        </div>
      </ItemContent>
    </ItemUI>
  );
};

Item.defaultProps = {
  icon: "chevron-right",
  disabled: false,
}