import Login from "../views/Auth/Login/Login";
import Home from "../views/Home/Home";

export const allRoutes = [
	{
		path: "/",
		component: Login,
		exact: true,
		type: "unauthorized",
	},
	{
		path: "/home",
		component: Home,
		exact: true,
		type: "authorized",
	},
];
