import jwt from 'jsonwebtoken';
import config from 'config';

const secretKey = config.get<string>('jwtSecretKey');

export function signJwt(object: Record<string, any>, options?: jwt.SignOptions | undefined): string {
  return jwt.sign(object, secretKey, {
    ...(options && options),
  });
}

export function verifyJwt(token: string): object {
  try {
    const decoded = jwt.verify(token, secretKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e) {
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}
