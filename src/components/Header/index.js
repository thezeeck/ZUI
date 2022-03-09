import { img } from "../../constant";
import { HeaderComponent } from "./styles";
import { useSetTheme, useGetTheme, darkTheme, lightTheme } from "../../ZUI";

export const Header = () => {
  const { name } = useGetTheme();
  const setTheme = useSetTheme;
  return (
    <HeaderComponent>
      <figure id="logo">
        <img src={img.logo} alt="ZUI UI"/>
      </figure>
      <div>
        <button onClick={() => { setTheme(name !== "light" ? lightTheme : darkTheme)}}>
          Theme: { name }  
        </button>
      </div>
    </HeaderComponent>
  );
}
