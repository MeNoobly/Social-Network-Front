import React, { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { IPostListItem } from "../types/props";
import PostItem from "./PostItem";

const PostList: FC<IPostListItem> = ({ posts }) => {
    return (
        <Container>
            <Button variant="success" className="mt-4">
                Добавить пост
            </Button>
            {posts.map((post) => (
                <PostItem post={post} />
            ))}
        </Container>
    );
};

export default PostList;
