import { menu } from "../../constant/menu";
import { Text, useThemeContext } from "../../ZUI";
import { ELink } from "../Links";

export const Aside = () => {
  const { theme } = useThemeContext();
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
                    <ELink to={child.path}>{child.name}</ELink>
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
