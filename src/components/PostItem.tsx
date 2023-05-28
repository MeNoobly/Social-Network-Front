import React, { FC, useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { IPostItem } from "../types/props";
import { normaliseDate } from "../functions/date";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { IUser } from "../types/store";

const PostItem: FC<IPostItem> = observer(({ post }) => {
    const { user } = useContext(Context);

    return (
        <div className="mt-3" style={{ border: "2px solid gray", padding: 10 }}>
            <Row>
                <Col md={2}>
                    <b className="fs-5">{post.title}</b>
                </Col>
                <Col md={2}>
                    <p>
                        <b className="fs-5">Автор: </b>
                        <br />
                        {post.author}
                    </p>
                </Col>
                <Col md={2}>
                    <p>
                        <b>Пост создан: </b>
                        <br />
                        {normaliseDate(post.createdAt)}
                    </p>
                </Col>
                <Col md={2}>
                    <p>
                        <b>Пост обновлен: </b>
                        <br />
                        {normaliseDate(post.updatedAt)}
                    </p>
                </Col>
                {(user.user as IUser).id === post.UserModelId && (
                    <>
                        <Col md={2}>
                            <Button variant="danger" onClick={() => {}}>
                                Удалить пост
                            </Button>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary">
                                Редактировать пост
                            </Button>
                        </Col>
                    </>
                )}
            </Row>
            <Row className="mt-3">
                <Col>{post.message}</Col>
                <Col>
                    <Image
                        src={`http://localhost:3001/${post.imagePath}`}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
        </div>
    );
});

export default PostItem;
