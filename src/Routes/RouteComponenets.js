import { Navigate } from "react-router-dom";

export const UserAuthRoute = ({ Component }) => {
	const token = localStorage?.getItem("token");
	if (token) {
		return <Component />;
	} else {
		return <Navigate to="/" />;
	}
};

// export const AuthRoute = ({ Component }) => {
//     const user = JSON.parse(localStorage.getItem('user'))
//     const token = localStorage?.getItem('token')
//     if (token && user?.roleId?.roleName === "superAdmin") {
//         return <Navigate to="/admin-services" />
//     } else if (token && user?.roleId?.roleName === "client") {
//         return <Navigate to="/" />
//     } else {
//         return (< Error />)
//     }
// }

export const UnAuthRoute = ({ Component }) => {
	const token = localStorage?.getItem("token");
	if (token) {
		return <Navigate to="/home" />;
	} else {
		return <Component />;
	}
};
