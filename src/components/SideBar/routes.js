import Dashboard from "../../assets/icons/Dashboard";
import User from "../../assets/icons/User";
import Office from "../../assets/icons/Office";
import Collections from "../../assets/icons/Collections";
import Shop from "../../assets/icons/Shop";
import Email from "../../assets/icons/Email";

export const routes = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <Dashboard color="#D54A39" />,
    iconActive: <Dashboard />,
  },
  {
    id: 2,
    title: "Clients",
    link: "/clients",
    sub_routes: [
      {
        name: "All Client",
        link: "/clients/all",
      },
      {
        name: "New Client",
        link: "/clients/new",
      },
      {
        name: "Incomplete Records",
        link: "/clients/incomplete",
      },
    ],
    icon: <User />,
    iconActive: <User color="#fff" />,
  },
  {
    id: 3,
    title: "Users",
    link: "/users",
    icon: <User />,
    iconActive: <User color="#fff" />,
  },
  {
    id: 4,
    title: "Office Branches",
    link: "/office",
    icon: <Office />,
    iconActive: <Office color="#fff" />,
  },
  {
    id: 5,
    title: "Collections",
    link: "/collections",
    icon: <Collections />,
    iconActive: <Collections color="#fff" />,
  },
  {
    id: 6,
    title: "Shop",
    link: "/shop",
    icon: <Shop />,
    iconActive: <Shop color="#fff" />,
  },
  {
    id: 7,
    title: "Email Campaign",
    link: "/email",
    icon: <Email />,
    iconActive: <Email color="#fff" />,
  },
];
