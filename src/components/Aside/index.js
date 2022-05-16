import { menu } from "../../constant/menu";
import { Text, useThemeContext, Anchor } from "../../ZUI";
import { Link } from "react-router-dom";

export const Aside = () => {
  const { theme } = useThemeContext();
  return (
    <aside>
      <ul>
        {menu.map((item) => (
          <li key={`id${item.name}`}>
            <h1>{item.name}</h1>
            <ul>
              {item.childs.sort().map((child, index) => (
                <li key={index}>
                  <Text text_color={theme.colors.text} decoration="none">
                    <Anchor as={Link} to={child.path}>
                      {child.name}
                    </Anchor>
                  </Text>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};
