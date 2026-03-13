import express from 'express';
import dotenv from 'dotenv';
import clientRoute from './routes/index.route.js';
import { connectDb } from './configs/database.config.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDb();

app.use('/api/client', clientRoute);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});