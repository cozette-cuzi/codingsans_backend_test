import { Express } from 'express';
import { loginHandler } from './controllers/LoginController';
import { createUserHandler } from './controllers/UserController';
import validate from './middleware/ValidateResource';
import { loginSchema } from './schema/LoginSchema';
import { createUserSchema } from './schema/UserSchema';
import { getBrreweriesHandler } from './controllers/BreweryController';

const routes = (app: Express) => {
  app.post('/users', validate(createUserSchema), createUserHandler);
  app.post('/login', validate(loginSchema), loginHandler);

  app.get('/breweries', getBrreweriesHandler);
};

export default routes;
