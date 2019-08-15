import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

export default app;