import React, { FC } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { IPostItem } from "../types/props";

const PostItem: FC<IPostItem> = ({ post }) => {
    return (
        <div className="mt-3" style={{ border: "2px solid gray", padding: 10 }}>
            <Row>
                <Col md={2}>
                    <b className="fs-5">{post.title}</b>
                </Col>
                <Col md={3}>
                    <p>
                        <b>Пост создан: </b>
                        {post.createdAt.toDateString()}
                    </p>
                </Col>
                <Col md={3}>
                    <p>
                        <b>Пост обновлен: </b>
                        {post.updatedAt.toDateString()}
                    </p>
                </Col>
                <Col md={2}>
                    <Button variant="danger">Удалить пост</Button>
                </Col>
                <Col md={2}>
                    <Button variant="primary">Редактировать пост</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>{post.message}</Col>
                <Col>
                    <Image
                        src={post.imagePath}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default PostItem;
