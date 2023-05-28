export interface IUser {
    id?: number;
    login: string;
    password?: string;
}

export interface IUserStore {
    isAuth: boolean;
    user: IUser | {};
}

export interface IPost {
    id: number;
    author?: string;
    UserModelId?: number;
    message: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    imagePath: string;
}

export interface IPostsStore {
    posts: IPost[];
    setPosts: (posts: IPost[]) => void;
}
