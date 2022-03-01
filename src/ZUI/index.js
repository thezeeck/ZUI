import "./styles.css";
import { Avatar } from "./components/Avatar";
import { Grid } from "./components/Grid";
import { Card } from "./components/Card";
import { darkTheme } from "./components/Theme/themes";
import { lightTheme } from "./components/Theme/themes";
import { Theme, ThemeProvider, SetTheme, GetTheme } from "./components/Theme";
import { CreateTheme } from "./components/Theme/themes";
import { colorsSchema } from "./components/Theme/colorsSchema";

const ZUI = {
  Avatar,
  Grid,
  Card,
  darkTheme,
  lightTheme,
  Theme,
  ThemeProvider,
  CreateTheme,
  colorsSchema,
  GetTheme,
  SetTheme,
}

export { 
  Avatar,
  Grid,
  Card,
  darkTheme,
  lightTheme,
  Theme,
  ThemeProvider,
  CreateTheme,
  colorsSchema,
  GetTheme,
  SetTheme,
}

export default ZUI;