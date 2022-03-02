import { Request, Response } from 'express';
import config from 'config';
import { validatePassword } from '../services/UserService';
import { signJwt } from '../utils/jwt';

export async function loginHandler(req: Request, res: Response) {
  // Validate user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  // Create an access token
  const accessToken = signJwt({ user: user }, { expiresIn: config.get('accessTokenTtl') });

  //return access token
  return res.send({ accessToken });
}
