import { Home } from "../content/Home";
import { AnchorContent } from "../content/Anchor";
import { AvatarContent } from "../content/Avatar";
import { ButtonContent } from "../content/Button";
import { CollapseContent } from "../content/Collapse";
import { CardContent } from "../content/Card";

export const menu = [
  {
    name: "Guide",
    childs: [
      {
        name: "Getting started",
        path: "/",
        component: Home
      }
    ]
  },
  {
    name: "Components",
    childs: [
      {
        name: "Anchor",
        path: "/anchor",
        component: AnchorContent
      },
      {
        name: "Avatar",
        path: "/avatar",
        component: AvatarContent
      },
      {
        name: "Button",
        path: "/button",
        component: ButtonContent
      },
      {
        name: "Card",
        path: "/card",
        component: CardContent
      },
      {
        name: "Collapse",
        path: "/collapse",
        component: CollapseContent
      },
      // "Button group",
      // "Pagination",
      // "Icons",
      // "Input",
      // "Autocomplete",
      // "Textarea",
      // "Checkbox",
      // "Radio",
      // "Dropdown",
      // "Progress",
      // "Tooltip",
      // "Modal",
      // "Loading",
      // "Navbar",
      // "Switch",
      // "Text",
      // "Link",
    ]
  },
  // {
  //   name: "Layouts",
  //   childs: [
  //     "Grid",
  //     "Container"
  //   ]
  // },
  // {
  //   name: "Theme",
  //   childs: [
  //     "Core theme",
  //     "Customize theme",
  //     "Dark theme",
  //     "Ligth theme",
  //     "Breakpoints",
  //   ]
  // },
];