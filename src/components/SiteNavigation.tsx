import { HomeIcon, SearchIcon, StoreIcon, UserIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

import Typography from "./Typography";
import { cn } from "../lib/utils";

const menuItems = [
  {
    icon: <HomeIcon />,
    text: "Udforsk",
    href: "/",
  },
  {
    icon: <StoreIcon />,
    text: "Butikker",
    href: "/shops",
  },
  {
    icon: <SearchIcon />,
    text: "Find varer",
    href: "/search",
  },
  {
    icon: <UserIcon />,
    text: "Profil",
    href: "/profile",
  },
];

function SiteNavigation() {
  return (
    <nav className="flex w-full justify-between bg-white fixed bottom-0 p-4">
      {menuItems.map((item) => (
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            cn("flex flex-col justify-center items-center text-primary", isActive ? "text-primary-dark *:fill-primary" : "")
          }
        >
          {item.icon}
          <Typography variant="body">{item.text}</Typography>
        </NavLink>
      ))}
    </nav>
  );
}

export default SiteNavigation;
