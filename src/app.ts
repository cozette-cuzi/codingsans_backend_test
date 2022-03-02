import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import connect from './utils/connect';
import morgan from 'morgan';
import routes from './routes';
import deserializeUser from './middleware/DeserializeUser';

export const startApp = async (): Promise<void> => {
  const port = config.get<number>('port');
  const app = express();

  app.use(express.json());

  app.use(morgan('tiny'));

  app.use(deserializeUser);

  app.listen(port, async () => {
    console.log('App is running');
    await connect();

    routes(app);
  });
};
