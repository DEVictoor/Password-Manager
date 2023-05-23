import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
  console.log("LOGGG.....");

  next();
};

export default logger;
