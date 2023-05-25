import { IRoute } from "./types/routes";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";

export const publicRoutes: IRoute[] = [
    { path: LOGIN_ROUTE, Component: Login },
    { path: REGISTRATION_ROUTE, Component: Registration },
];

export const authRoutes: IRoute[] = [{ path: MAIN_ROUTE, Component: Main }];
