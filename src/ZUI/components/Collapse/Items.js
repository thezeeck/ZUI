import { ItemContent, ItemUI } from "./styles";

export const Item = ({children, state, handleClick, id}) => (
  <ItemUI>
    <button onClick={() => {handleClick(id)}}>X</button>
    <ItemContent className={state[id] && "open"}>
      <div>
        {children}
      </div>
    </ItemContent>
  </ItemUI>
);