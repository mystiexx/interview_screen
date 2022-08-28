import Library from "../../assets/icons/Library";
import Mic from "../../assets/icons/Mic";
import GroupChat from "../../assets/icons/GroupChat";
import Attachment from "../../assets/icons/Attachment";
import ShieldCheck from "../../assets/icons/ShieldCheck";
import girl from "../../assets/images/Girl_1.png";
import boy1 from "../../assets/images/boy_1.png";
import boy2 from "../../assets/images/boy_22.png";
import plurk from "../../assets/images/plurk.png";
import telegram from "../../assets/images/telegram.png";
import cisco from "../../assets/images/cisco.png";
import bebo from "../../assets/images/bebo.png";
import full from "../../assets/images/full_star.png";
import half from "../../assets/images/half_star.png";

export const sales_progress = [
  {
    id: new Date() * 100,
    title: "Briviba SaaS",
    sub_title: "PHP, SQLite, Artisan CLIмм",
    bgColor: "#EEE5FF",
    icon: <Library />,
  },
  {
    id: new Date() * 1000,
    title: "Briviba SaaS",
    sub_title: "PHP, SQLite, Artisan CLIмм",
    bgColor: "#FFF4DE",
    icon: <Mic />,
  },
  {
    id: new Date() * 10,
    title: "Briviba SaaS",
    sub_title: "PHP, SQLite, Artisan CLIмм",
    bgColor: "#C9F7F5",
    icon: <GroupChat />,
  },
  {
    id: new Date() * 10000,
    title: "Briviba SaaS",
    sub_title: "PHP, SQLite, Artisan CLIмм",
    bgColor: "#FFE2E5",
    icon: <Attachment />,
  },
  {
    id: new Date() * 100000,
    title: "Briviba SaaS",
    sub_title: "PHP, SQLite, Artisan CLIмм",
    bgColor: "#E1E9FF",
    icon: <ShieldCheck />,
  },
];

export const new_arrival_members = [
  {
    id: 1,
    user: boy1,
    name: "Brad Simmons",
    stack: "HTML, JS, ReactJS",
    earn: { amount: "$8,000,000", status: "in process" },
    commission: { amount: "$520", status: "paid" },
    company: { name: "Intertico", type: "Web, UI/UX Design" },
    rating: "Best Rated",
    star: full,
  },
  {
    id: 2,
    user: girl,
    name: "Jessie Clarcson",
    stack: "C#, ASP.NET, MS SQL",
    earn: { amount: "$23,000,000", status: "pending" },
    commission: { amount: "$1,600", status: "rejected" },
    company: { name: "Agoda", type: "Houses & Hotels" },
    rating: "Above Average",
    star: half,
  },
  {
    id: 3,
    user: boy2,
    name: "Lebron Wayde",
    stack: "PHP, Laravel, VueJS",
    earn: { amount: "$34,000,000", status: "paid" },
    commission: { amount: "$6,700", status: "paid" },
    company: { name: "RoadGee", type: "Transportation+" },
    rating: "Best Rated",
    star: full,
  },
];

export const new_arrivals = [
  {
    id: 1,
    image: plurk,
    name: "Sant Outstanding",
    email: "bprow@bnc.cc",
    price: { amount: "$2,000,000", status: "paid" },
    status: "approved",
  },
  {
    id: 2,
    image: telegram,
    name: "Telegram Application",
    email: "bprow@bnc.cc",
    price: { amount: "$4,600,000", status: "paid" },
    status: "in progress",
  },
  {
    id: 3,
    image: cisco,
    name: "Cisco Management",
    email: "bprow@bnc.cc",
    price: { amount: "$560,000", status: "paid" },
    status: "success",
  },
  {
    id: 4,
    image: bebo,
    name: "HR Management",
    email: "bprow@bnc.cc",
    price: { amount: "$57,000", status: "paid" },
    status: "rejected",
  },
];
