import { AvatarContent } from "./content/Avatar";
import { GridContent } from "./content/Grid";
// import { ThemeProvider, darkTheme } from "../../ZUI";

export const Main = () => {
  return (
    <main>
      <GridContent />
      <AvatarContent />
      <div>
        Card
      </div>
    </main>
  )
}