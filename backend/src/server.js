import express from 'express'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
require('dotenv').config()
//console.log(process.env.MONGO_URL) 
const app = express()

// init middleware
app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})
const port = process.env.PORT || 4000
const dboptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// TODO Part I-3: check .env exists
if (!process.env.MONGO_URL) {
    console.error("Missing MONGO_URL!!!");
    process.exit(1);
}
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  }
    // TODO Part I-3: connect the backend to mongoDB
).then((res) => console.log("mongo db connection created"))
mongoose.connection.on('error',
                        console.error.bind(console, 'connection error:'));
routes(app)
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})