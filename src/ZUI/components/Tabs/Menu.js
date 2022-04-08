import { MenuItem } from "./MenuItem";
import { MenuUI } from "./styles";

export const Menu = ({menuOptions}) => {
  return (
    <MenuUI>
      <ul>
        {menuOptions.map(elem => <MenuItem tabid={elem.index} key={elem.index}>{elem.title}</MenuItem>)}
      </ul>
    </MenuUI>
  )
}