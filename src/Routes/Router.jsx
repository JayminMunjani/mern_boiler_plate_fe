import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../views/Error/Error";
import { allRoutes } from ".";
import { UnAuthRoute, UserAuthRoute } from "./RouteComponenets";

const Router = () => {
	return (
		<div>
			<Routes>
				{allRoutes?.map((route, i) => {
					switch (route.type) {
						case "authorized":
							return <Route key={"route" + i} exact path={route?.path} element={<UserAuthRoute Component={route.component} />} />;
						case "unauthorized":
							return <Route key={"route" + i} exact path={route?.path} element={<UnAuthRoute Component={route.component} />} />;
						default:
							return <Route key={"route" + i} exact path={"/404"} element={<Error />} />;
					}
				})}
			</Routes>
		</div>
	);
};

export default Router;
