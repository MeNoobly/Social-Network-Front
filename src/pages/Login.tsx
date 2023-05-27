import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { ILoginFields } from "../types/auth";
import { MAIN_ROUTE } from "../utils/consts";

const Login: FC = observer(() => {
    const navigate = useNavigate();
    const { user } = useContext(Context);

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
        setError,
    } = useForm<ILoginFields>({ mode: "onChange" });

    const loginHandler = async () => {
        try {
            const values = getValues();
            // const data = await login(values.login, values.password);
            user.isAuth = true;
            reset();
            navigate(MAIN_ROUTE);
        } catch (error: Error | unknown) {
            setError("password", {
                type: "custom",
                message: "Введен неверный пароль!",
            });
        }
    };

    const onSumbit: SubmitHandler<ILoginFields> = (data) => {
        loginHandler();
    };

    return (
        <>
            <Container>
                <Form className="mt-4" onSubmit={handleSubmit(onSumbit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите логин"
                            {...register("login", {
                                required:
                                    "Логин является обязательным полем для заполнения!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message:
                                        "Пожалуйста, введите корректный логин!",
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.login && (
                        <div style={{ color: "red" }} className="mb-3">
                            {errors.login.message}
                        </div>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            {...register("password", {
                                required:
                                    "Пароль является обязательным полем для заполнения!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message:
                                        "Пожалуйста, введите корректный пароль!",
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.password && (
                        <div style={{ color: "red" }} className="mb-3">
                            {errors.password.message}
                        </div>
                    )}
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
            </Container>
        </>
    );
});

export default Login;
