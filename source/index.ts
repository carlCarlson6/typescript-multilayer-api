import morgan from 'morgan';
import express from 'express';
import Server from './api/server';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import PostRoutes from './api/routes/PostsRoutes';
import PostsServices from './services/PostsServices';
import PostRepository from './database/repositories/PostRepository';
import IndexRoutes from './api/routes/IndexRoutes';

const server = new Server();

const middlewares = [morgan('dev'), express.json(), express.urlencoded({extended:false}), helmet(), compression(), cors()]
server.SetConfig(middlewares);

const indexRoutes = new IndexRoutes();
const postRoutes = new PostRoutes(new PostsServices(new PostRepository()));
server.CreateRoutes(indexRoutes.router, postRoutes.router);

server.Start();
