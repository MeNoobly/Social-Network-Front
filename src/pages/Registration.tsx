import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IRegistrationFields } from "../types/auth";
import { LOGIN_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";

const Registration: FC = observer(() => {
    const navigate = useNavigate();

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm<IRegistrationFields>({ mode: "onChange" });

    const registrationHandler = async () => {
        try {
            const values = getValues();
            await registration(values.login, values.password);
            navigate(LOGIN_ROUTE);
        } catch (error: Error | unknown) {
            alert(error);
        }
    };

    const onSumbit: SubmitHandler<IRegistrationFields> = (data) => {
        registrationHandler();
        reset();
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
                        <div className="mb-3 text-danger">
                            {errors.login.message}
                        </div>
                    )}
                    <Form.Group className="mb-3 mt-2">
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
                        <div className="mb-3 text-danger">
                            {errors.password.message}
                        </div>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Подтверждение пароля</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                            {...register("repeatPassword", {
                                required:
                                    "Пароль является обязательным полем для заполнения!",
                                pattern: {
                                    value: /^[a-zA-Z0-9_]+$/,
                                    message:
                                        "Пожалуйста, введите корректный пароль!",
                                },
                                validate: (item: string) => {
                                    if (watch("password") !== item) {
                                        return "Пароли не совпадают";
                                    }
                                },
                            })}
                        />
                    </Form.Group>
                    {errors.repeatPassword && (
                        <div className="mb-3 mt-2 text-danger">
                            {errors.repeatPassword.message}
                        </div>
                    )}
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Form>
            </Container>
        </>
    );
});

export default Registration;
