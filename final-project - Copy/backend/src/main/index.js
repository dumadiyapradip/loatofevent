
import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "../db/index.js";


const PORTPASS = process.env.PORT || 5000
dotenv.config({
    path: './env'
})
connectDB()
    .then(() => {
        app.listen(PORTPASS, (req, res) => {
            console.log(`server wase running is port : ${PORTPASS}`)
        })
    })
    .catch((err) => {
        console.log(`db connection is fail ${err}`);
    })



















// import express from 'express'
// import { DB_NAME } from './constants.js'


// const app = express()

//     ; (async () => {
//         try {
//             mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//             app.on("errow", (erro) => {
//                 console.log('rund');
//                 console.log('express erro throw', erro);
//             });
//             app.listen(process.env.PORT, () => {
//                 console.log("PORT=", process.env.PORT);
//             })
//         } catch (e) {
//             console.log("not fatch data ", e);
//         }

//     })