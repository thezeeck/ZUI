import { ItemContent, ItemUI } from "./styles";

export const Item = ({children, state, setState, id}) => (
  <ItemUI>
    <button onClick={() => {setState({...state, ...{[id]: !state[id]}})}}>X</button>
    <ItemContent className={state[id] && "open"}>
      <div>
        {children}
      </div>
    </ItemContent>
  </ItemUI>
);