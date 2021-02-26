
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
// import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {   
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon fa fa-home",
    component: Dashboard,
    layout: "/admin",
  }, 
  {
    path: "/user",
    name: "Clientes",
    icon: "nc-icon fa fa-user-friends",
    component: UserProfile,
    layout: "/admin",
  }, 
];

export default dashboardRoutes;
