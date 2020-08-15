import express, { Router } from 'express';
import DbConfig from '../database/config/DbConfig';

class Server {
    private app: express.Application;

    constructor() {
        this.app = express();

    }

    SetConfig(middlewares: Array<any>) {
        this.app.set('port', process.env.PORT || 4000);
        new DbConfig();
           
        this.SetMiddlewares(middlewares);
    }

    SetMiddlewares(middlewares: Array<any>) {
        middlewares.forEach(middleware => this.app.use(middleware));
    }

    CreateRoutes(indexRouter: Router, postsRouter: Router) {
        this.app.use(indexRouter);
        this.app.use('/api/posts', postsRouter);
    }

    Start() {
        this.app.listen(this.app.get('port'), () => console.log('the server is running on', this.app.get('port')))
    }

}

export default Server;
