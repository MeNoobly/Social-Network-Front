import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";
import { IUser } from "../types/store";

export const registration = async (login: string, password: string) => {
    try {
        const { data } = await $host.post(
            `http://localhost:3001/api/user/registration`,
            { login, password }
        );

        localStorage.setItem("token", data.token);

        return jwt_decode(data.token);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export const login = async (login: string, password: string) => {
    try {
        const { data } = await $host.post(
            `http://localhost:3001/api/user/login`,
            { login, password }
        );

        localStorage.setItem("token", data.token);

        return jwt_decode(data.token) as IUser;
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export const check = async () => {
    try {
        const { data } = await $authHost.get(
            `http://localhost:3001/api/user/auth`
        );

        localStorage.setItem("token", data.token);

        return jwt_decode(data.token);
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};

export const getUser = async (id: number) => {
    try {
        const user = await $authHost.get<IUser>(
            `http://localhost:3001/api/user/${id}`
        );

        return user;
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
};
