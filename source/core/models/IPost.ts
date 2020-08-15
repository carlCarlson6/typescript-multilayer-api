import moongose from 'mongoose';

interface IPost extends moongose.Document {
    title?: String,
    url?: String,
    content?: String,
    image?: String,
    createdAt?: Date,
    updatedAt?: Date

}

export default IPost;
