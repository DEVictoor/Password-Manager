import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { getErrorMessage } from "../utils/error.handle";

dotenv.config();

export const SECRET_KEY: Secret = process.env.JWT_KEY || "";

export interface CustomRequest extends Request {
  user_id: string | CustomPayload;
}

interface CustomPayload extends JwtPayload {
  id: string;
}

export const JwtAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token)
      throw new Error(
        "Por favor enviame un token tipo Bearer por la cabezera Authorization"
      );

    const decoded = jwt.verify(token, SECRET_KEY) as CustomPayload;

    (req as CustomRequest).user_id = decoded.id;

    next();
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};
