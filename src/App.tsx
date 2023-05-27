import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const { user } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        check()
            .then(() => {
                user.isAuth = true;
            })
            .finally(() => setIsLoading(false))
            .catch(() => (user.isAuth = false));
    }, [user]);

    if (isLoading) {
        return <Spinner animation="grow" />;
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
