import IPost from "../models/IPost";

interface IPostsServices {
    GetPost(queryParams: any): Promise<IPost>
    CreatePost(post: IPost): Promise<IPost>
    ListPosts(): Promise<Array<IPost>>
    UpdatePost(url: any, updateParams: IPost): Promise<IPost>
    DeletePost(url: any): Promise<void>
}

export default IPostsServices;