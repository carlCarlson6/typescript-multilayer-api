import {Request, Response, Router} from 'express';

class IndexRoutes {
    public router: Router

    constructor() {
        this.router = Router();
        this.Routes();
    }

    Routes() {
        this.router.get('/', (request: Request, response: Response) => response.send('API: /api/posts'));
    }

}

export default IndexRoutes;
