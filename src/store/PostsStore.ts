import { makeAutoObservable } from "mobx";
import { IPost } from "../types/store";

export default class PostsStore {
    private _posts: IPost[] = [
        {
            id: 1,
            title: "Котята",
            message:
                "Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята Котята ",
            createdAt: new Date(),
            updatedAt: new Date(),
            imagePath:
                "https://mobimg.b-cdn.net/v3/fetch/6b/6b65ac7a4470315867be4d9111e90eb8.jpeg",
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    get posts(): IPost[] {
        return this._posts;
    }

    set posts(posts: IPost[]) {
        this._posts = posts;
    }
}
