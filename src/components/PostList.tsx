import React, { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { IPostListItem } from "../types/props";
import PostItem from "./PostItem";
import { observer } from "mobx-react-lite";

const PostList: FC<IPostListItem> = observer(({ posts }) => {
    return (
        <Container>
            <Button variant="success" className="mt-4">
                Добавить пост
            </Button>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </Container>
    );
});

export default PostList;
