export interface IUser {
    login: string;
    password: string;
}

export interface IUserStore {
    isAuth: boolean;
    user: IUser | {};
}
