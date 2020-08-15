import IPost from "../models/IPost";
import IRepository from "./IRepository";

interface IPostRepository extends IRepository<IPost> { }

export default IPostRepository;
