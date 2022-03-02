import { Express } from 'express';
import { loginHandler } from './controllers/LoginController';
import { createUserHandler } from './controllers/UserController';
import validate from './middleware/ValidateResource';
import { loginSchema } from './schema/LoginSchema';
import { createUserSchema } from './schema/UserSchema';
import { getBreweriesHandler } from './controllers/BreweryController';
import { requireAuth } from './middleware/requireAuth';

const routes = (app: Express) => {
  app.post('/users', validate(createUserSchema), createUserHandler);
  app.post('/login', validate(loginSchema), loginHandler);
  app.get('/breweries', requireAuth, getBreweriesHandler);
};

export default routes;
