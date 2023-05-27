import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { IContext } from "../types/context";
import { Context } from "..";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../route";
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";

const AppRouter: FC = observer(() => {
    const { user } = useContext<IContext>(Context);

    return (
        <>
            <Routes>
                {user.isAuth &&
                    authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {user.isAuth ? (
                    <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
                ) : (
                    <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
                )}
            </Routes>
        </>
    );
});

export default AppRouter;
