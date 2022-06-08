import express, { Express, Request, Response } from 'express';
import routes from './routes/';

const app: Express = express();

app.use(express.json());

app.use(routes)


app.listen(8000, () => {
  console.log("Server running")
})