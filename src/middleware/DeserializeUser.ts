import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];
    const { decoded } = verifyJwt(bearerToken);
    if (decoded) {
      res.locals.user = decoded.user;
      return next();
    }
  }
  return next();
};

export default deserializeUser;
