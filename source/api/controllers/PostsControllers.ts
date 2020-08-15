import IPostsServices from '../../core/services/IPostServices';
import IPost from '../../core/models/IPost';
import {Request, Response} from 'express';

class PostsController {
    private postServices: IPostsServices;

    constructor(postServices: IPostsServices) { 
        this.postServices = postServices;
    }

    async GetPost(request:Request, response:Response): Promise<void> {
        try {
            const query = {url: request.params.url};
            const post = await this.postServices.GetPost(query);
            response.status(200).json(post);
        }
        catch (error) {
            response.status(500).json({error});
        }
    }

    async ListPosts(request:Request, response:Response): Promise<void> {
        try {
            const posts = await this.postServices.ListPosts();
            response.status(200).json(posts);
        }
        catch (error) {
            response.status(500).json({error});
        }
    }

    async CreatePost(request:Request, response:Response): Promise<void> {
        try {
            const createdPost = await this.postServices.CreatePost(request.body);
            response.status(201).json(createdPost);
        }
        catch (error) {
            response.status(500).json({error: error.toString()});
        }
    }

    async UpdatePost(request:Request, response:Response): Promise<void> {
        try {
            const updateParams: IPost = request.body;
            const postUrl = request.params.url;
            const updatedPost = await this.postServices.UpdatePost(postUrl, updateParams);
            response.status(200).json(updatedPost);
        }
        catch (error) {
            response.status(500).json({error});
        }
    }

    async DeletePost(request:Request, response:Response): Promise<void> {
        try {
            const postUrl = request.params.url;
            await this.postServices.DeletePost(postUrl);
            response.status(200).json({message: 'post deleted'});
        }
        catch (error) {
            response.status(500).json({error});
        }
    }

}

export default PostsController;
