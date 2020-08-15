import IPostRepository from "../../core/repositories/IPostRepository";
import IPost from "../../core/models/IPost";
import Post from "../models/Post";

class PostRepository implements IPostRepository {

    async Add(entity: IPost): Promise<IPost> {
        const createdPost = new Post(entity);
        await createdPost.save();
        return createdPost;
    }

    async Query(queryObject: any): Promise<Array<IPost>> {
        const postsFound = await Post.find(queryObject);
        return postsFound;
    }

    async Update(id: any, updateParams: IPost): Promise<IPost> {
        const postUpdated = await Post.findByIdAndUpdate({_id: id}, {$set: updateParams}, {new: true});
        if(!postUpdated) throw `cannot updated the post ${id}`
        return postUpdated;
    }

    async Delete(id: any): Promise<void> {
        const postDeleted = await Post.findByIdAndDelete({_id: id});
        if(!postDeleted) throw `cannot updated the post ${id}`
    }

}

export default PostRepository;
