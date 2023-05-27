import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IContext } from "./types/context";
import UserStore from "./store/UserStore";
import PostsStore from "./store/PostsStore";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

export const Context = createContext<IContext>({
    user: new UserStore(),
    posts: new PostsStore(),
});

root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                user: new UserStore(),
                posts: new PostsStore(),
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>
);
