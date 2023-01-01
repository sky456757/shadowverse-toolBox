import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
  export default {
    connect: () => { /* code to connect Mongoose DB */ 
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then((res) => console.log("mongo db connection created"));
    }
  };