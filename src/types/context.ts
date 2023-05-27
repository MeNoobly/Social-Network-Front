import { IPostsStore, IUserStore } from "./store";

export interface IContext {
    user: IUserStore;
    posts: IPostsStore;
}
