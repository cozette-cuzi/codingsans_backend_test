import { Express } from 'express';
import { loginHandler } from './controllers/LoginController';
import { createUserHandler } from './controllers/UserController';
import validate from './middleware/ValidateResource';
import { loginSchema } from './schema/LoginSchema';
import { createUserSchema } from './schema/UserSchema';

const routes = (app: Express) => {
  app.post('/api/users', validate(createUserSchema), createUserHandler);
  app.post('/api/login', validate(loginSchema), loginHandler)
};

export default routes;
