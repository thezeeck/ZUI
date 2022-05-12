import { img } from "../../constant";
import { LogoSize } from "./styles";
import { useThemeContext, lightTheme, Grid, Button } from "../../ZUI";
import { userTheme } from "../../styles/theme";

export const Header = () => {
  const { theme, setNewTheme } = useThemeContext();
  const { name } = theme;
  return (
    <header>
      <Grid >
        <Grid.Item size="auto">
          <LogoSize id="logo">
            <img src={img.logo} alt="ZUI UI"/>
            <figcaption>ZUI UI</figcaption>
          </LogoSize>
        </Grid.Item>
        <Grid.Item space-left="auto">
          <Button onClick={() => { setNewTheme(name === "userTheme" ? lightTheme : userTheme)}}>
            Theme: { name }  
          </Button>
        </Grid.Item>
      </Grid>
    </header>
  );
}
