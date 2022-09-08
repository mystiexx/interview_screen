import Dashboard from "../../assets/icons/Dashboard";
import User from "../../assets/icons/User";
import Office from "../../assets/icons/Office";
import Collections from "../../assets/icons/Collections";
import Shop from "../../assets/icons/Shop";
import Email from "../../assets/icons/Email";
import Report from "../../assets/icons/Report";
import Application from "../../assets/icons/Application";
import Remita from "../../assets/icons/Remita";
import Settings from "../../assets/icons/Settings";
import Attachment from "../../assets/icons/Attachment";


export const routes = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
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
    sub_routes: [
      {
        name: "All Client",
        link: "/clients/all",
      },
    ]
  },
  {
    id: 5,
    title: "Collections",
    link: "/collections",
    icon: <Collections />,
    iconActive: <Collections color="#fff" />,
    sub_routes: [
      {
        name: "All Collections",
        link: "/clients/all",
      },
    ]
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

export const otherRoutes =[
  {
    id: 1,
    title: 'Reports',
    link: "/reports",
    icon: <Report/>,
    iconActive: <Report color='#fff'/>,
  },
  {
    id: 2,
    title: 'Applications',
    link: "/applications",
    icon: <Application/>,
    iconActive: <Application color='#fff'/>
  },
  {
    id: 3,
    title: 'Remita',
    link: "/remita",
    icon: <Remita/>,
    iconActive: <Remita color='#fff'/>
  },
  {
    id: 4,
    title: 'Workflows',
    link: "/workflows",
    icon: <Attachment color='#EB8376'/>,
    iconActive: <Attachment color='#fff'/>
  },
  {
    id: 5,
    title: 'Settings',
    link: "/settings",
    icon: <Settings/>,
    iconActive: <Settings color='#fff'/>
  },
]
