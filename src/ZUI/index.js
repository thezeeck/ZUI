import { Avatar } from "./components/Avatar";
import { Grid } from "./components/Grid";
import { Card } from "./components/Card";
import { darkTheme, lightTheme, CreateTheme } from "./components/Theme/themes";
import { Theme, ThemeProvider, useThemeContext } from "./components/Theme";
import { colorsSchema } from "./components/Theme/colorsSchema";
import { Anchor } from "./components/Anchor";
import { Container } from "./components/Container";
import { Collapse } from "./components/Collapse";
import { Text } from "./components/Text";
import { hexToRgba } from "./utils";

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
  useThemeContext,
  Anchor,
  Container,
  Collapse,
  Text,
  hexToRgba,
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
  useThemeContext,
  Anchor,
  Container,
  Collapse,
  Text,
  hexToRgba,
}

export default ZUI;