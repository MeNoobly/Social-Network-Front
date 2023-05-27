import React, { FC, useContext } from "react";
import PostList from "../components/PostList";
import { Context } from "..";

const Main: FC = () => {
    const { posts } = useContext(Context);

    return (
        <>
            <PostList posts={posts.posts} />
        </>
    );
};

export default Main;
