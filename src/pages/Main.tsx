import React, { FC, useContext, useEffect } from "react";
import PostList from "../components/PostList";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { getAllPosts } from "../http/postAPI";
import { IPost } from "../types/store";
import { getUser } from "../http/userAPI";

const Main: FC = observer(() => {
    const { posts } = useContext(Context);

    useEffect(() => {
        getAllPosts()
            .then((data) => {
                posts.setPosts(data?.data as IPost[]);
            })
            .then(() => {
                posts.posts.map((item) =>
                    getUser(item.UserModelId as number).then((data) => {
                        item.author = data?.data.login;
                    })
                );
            });
    }, [posts]);

    return (
        <>
            <PostList posts={posts.posts} />
        </>
    );
});

export default Main;
