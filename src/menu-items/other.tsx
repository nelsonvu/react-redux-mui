
// assets
import { IconBrandChrome, IconHelp } from "@tabler/icons-react";
import { MenuType } from "../types/enum";
import { Pages } from "./interface/page";

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other: Pages = {
  id: "sample-docs-roadmap",
  type: MenuType.Group,
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: MenuType.Item,
      url: "/dashboard",
      icon: icons.IconBrandChrome,
      breadcrumbs: false,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: MenuType.Item,
      url: "https://codedthemes.gitbook.io/berry/",
      icon: icons.IconHelp,
      external: true,
      target: true,
    },
  ],
};

export default other;
