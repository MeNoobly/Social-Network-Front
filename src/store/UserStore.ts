import { makeAutoObservable } from "mobx";
import { IUser } from "../types/store";

export default class UserStore {
    private _isAuth = true;
    private _user: IUser | {} = {};

    constructor() {
        makeAutoObservable(this);
    }

    get isAuth() {
        return this._isAuth;
    }

    set isAuth(isAuth) {
        this._isAuth = isAuth;
    }

    get user() {
        return this._user;
    }

    set user(user: IUser | {}) {
        this._user = user;
    }
}
