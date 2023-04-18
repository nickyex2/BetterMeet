import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = connect(process.env.MONGODB_URL as string);

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.listen(5000);