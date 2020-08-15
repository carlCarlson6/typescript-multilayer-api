import {Request, Response, Router} from 'express';
import PostsController from '../controllers/PostsControllers';
import IPostsServices from '../../core/services/IPostServices';

class PostRoutes {
    public router = Router();
    private controller: PostsController;

    constructor(postServices: IPostsServices) {
        this.ConstructRoutes();
        this.controller = new PostsController(postServices);
    }

    GetPost = async (request:Request, response:Response) => await this.controller.GetPost(request, response);
    ListPosts = async (request:Request, response:Response) => await this.controller.ListPosts(request, response);
    CreatePost = async (request:Request, response:Response) => await this.controller.CreatePost(request, response);
    UpdatePost = async (request:Request, response:Response) => await this.controller.UpdatePost(request, response);
    DeletePost = async (request:Request, response:Response) => await this.controller.DeletePost(request, response);

    ConstructRoutes() {
        this.router.get('/:url', this.GetPost);
        this.router.get('/', this.ListPosts);
        this.router.post('/', this.CreatePost);
        this.router.put('/:url', this.UpdatePost);
        this.router.delete('/:url', this.DeletePost);
    }

}

export default PostRoutes;
