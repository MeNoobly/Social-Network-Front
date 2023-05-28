import { makeAutoObservable } from "mobx";
import { IPost } from "../types/store";

export default class PostsStore {
    private _posts: IPost[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get posts(): IPost[] {
        return this._posts;
    }

    setPosts(posts: IPost[]) {
        this._posts = posts;
    }
}
