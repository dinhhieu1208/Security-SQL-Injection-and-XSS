import dotenv from 'dotenv';
import express from 'express';
import clientRoute from './routes/index.route.js';
import webRoute from "./routes/web.route.js";
import { connectDb } from './configs/database.config.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

// static files
app.use(express.static("src/public"));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// view engine
app.set("view engine", "pug");
app.set("views", "./src/views");

// connect database
connectDb();

// routes
app.use('/api/client', clientRoute);
app.use('/', webRoute);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});