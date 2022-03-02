import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/UserSchema';

import { createUser } from '../services/UserService';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response): Promise<object> {
  try {
    const user = await createUser(req.body); // call create user.service

    return res.send(user);
  } catch (err) {
    return res.status(409).send({ message: err.message });
  }
}
