import { img } from "../../constant";
import { HeaderComponent } from "./styles";

export const Header = () => {
  return (
    <HeaderComponent>
      <figure>
        <img src={img.logo} alt="ZUI UI"/>
      </figure>
    </HeaderComponent>
  );
}
