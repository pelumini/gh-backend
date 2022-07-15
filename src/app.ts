import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';

const port = process.env.PORT || config.get<number>('port');
const app = express();

app.use(
  cors({
    origin: config.get('origin'),
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`App is up and running on port:${port}`);
  await connect();
  routes(app);
});
