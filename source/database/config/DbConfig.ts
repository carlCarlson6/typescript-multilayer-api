import mongoose from 'mongoose';
import env_variables from '../../env_variables';

class DbConfig {
    constructor() {
        mongoose.set('useFindAndModify', true);
        mongoose.connect(env_variables.MONGODB, 
            {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}
        ).then(db => console.log('connected to db'));
    }

}

export default DbConfig;
