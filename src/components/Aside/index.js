import { Link } from "react-router-dom";
import { menu } from "../../constant/menu";
import { Text, GetTheme } from "../../ZUI";

export const Aside = () => {
  const theme = GetTheme();
  return (
    <aside>
      <ul>
        {menu.map(item => (
          <li key={`id${item.name}`}>
            <h1>{item.name}</h1>
            <ul>
              {item.childs.sort().map((child, index) => (
                <li key={index}>
                  <Text textColor={theme.colors.text} decoration="none">
                    <Link to={child.path}>{child.name}</Link>
                  </Text>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  )
}
