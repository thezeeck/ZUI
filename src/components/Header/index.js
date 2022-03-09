import { img } from "../../constant";
import { HeaderComponent } from "./styles";
import { useThemeContext, darkTheme, lightTheme } from "../../ZUI";

export const Header = () => {
  const { theme, setNewTheme } = useThemeContext();
  const { name } = theme;
  return (
    <HeaderComponent>
      <figure id="logo">
        <img src={img.logo} alt="ZUI UI"/>
      </figure>
      <div>
        <button onClick={() => { setNewTheme(name !== "light" ? lightTheme : darkTheme)}}>
          Theme: { name }  
        </button>
      </div>
    </HeaderComponent>
  );
}
