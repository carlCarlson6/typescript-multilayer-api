import IPostsServices from "../core/services/IPostServices";
import IPostRepository from "../core/repositories/IPostRepository";
import IPost from "../core/models/IPost";

class PostsServices implements IPostsServices {
    private postRepository: IPostRepository;
    
    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async CreatePost(post: IPost): Promise<IPost> {
        post.createdAt = new Date(Date.now());
        post.updatedAt = new Date(Date.now());
        const createdPost = await this.postRepository.Add(post);
        return createdPost;
    }

    async GetPost(queryParams: any): Promise<IPost> {
        const postsFound = await this.postRepository.Query(queryParams);
        if(postsFound.length === 0) throw 'post not found';
        return postsFound[0];
    }

    async ListPosts(): Promise<Array<IPost>> {
        const postsFound = await this.postRepository.Query({});
        return postsFound;
    }

    async UpdatePost(url: any, updateParams: IPost): Promise<IPost> {
        updateParams.updatedAt = new Date(Date.now());
        const postToUpdate = await this.GetPost({url});
        const updatedPost = await this.postRepository.Update(postToUpdate._id, updateParams);
        return updatedPost;
    }
    
    async DeletePost(url: any): Promise<void> {
        const postToDelete = await this.GetPost({url});
        await this.postRepository.Delete(postToDelete._id);
    }

}

export default PostsServices;
