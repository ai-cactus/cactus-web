import { NavButtonProps } from "@/components/main/nav-button";
import { AppRoutes } from "./routes";

export const primaryNav = [
  {
    icon: "/home_ic.svg",
    label: "Dashboard",
    href: AppRoutes.main.dashboard.path,
    name: AppRoutes.main.dashboard.name,
  },
  {
    icon: "/document_ic.svg",
    label: "Documents",
    href: AppRoutes.main.documents.path,
    name: AppRoutes.main.documents.name,
  },
  {
    icon: "/history_ic.svg",
    label: "History",
    href: AppRoutes.main.history.path,
    name: AppRoutes.main.history.name,
  },
];

export const secondaryNav: NavButtonProps[] = [
  {
    icon: "/settings_ic.svg",
    label: "Settings",
    href: "#",
    routes: [
      {
        icon: "/profile-circle.svg",
        label: "Profile",
        href: "/profile",
      },
    ],
  },
  {
    icon: "/help_center_ic.svg",
    label: "Help Center",
    href: "/help-center",
  },
];

export const landingHeaderNav = [
  {
    label: "Product",
    href: "#",
    name: "product",
  },
  {
    label: "Features",
    href: "#",
    name: "features",
  },
  {
    label: "Testimonials",
    href: "#",
    name: "testimonials",
  },
];
