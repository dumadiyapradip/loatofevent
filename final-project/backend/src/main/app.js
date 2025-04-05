import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv'
import Userrouter from '../routes/UserRouter.js'
import Homerouter from "../routes/HomeRouter.js";
import path from "path";
const app = express();
import { fileURLToPath } from 'url';
dotenv.config({
  path: './env'
})

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.static('dist'))
app.use(express.json({ limit: "16kb" })) // pass the frontend to backend the meddleware
app.use(express.urlencoded({ extended: true, limit: "16kb" })) //pass the data A URL
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '../../../frontend/dist')));

app.use("/eventmenegment/web/User", Userrouter)
app.use("/eventmenegment/web", Homerouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../frontend/dist', 'index.html'));
});

export { app }