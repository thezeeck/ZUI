import { Home } from "../content/Home";
import { AnchorContent } from "../content/Anchor";
import { AvatarContent } from "../content/Avatar";

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
      // "Button",
      // "Button group",
      // "Card",
      // "Pagination",
      // "Collapse",
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