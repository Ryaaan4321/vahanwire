import express from 'express';
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv'
import router from './userrouter/index.js';
import cors from 'cors'
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected with the db");
}
).catch((e) => {
    console.log("there is some error", e.message);
})

console.log("mongo url =",process.env.MONGO_URI);
app.use(express.json());
app.use(cors());
app.use('/user',router);

app.listen(3000, () => {
    console.log("hello hello from the index.js");
})

