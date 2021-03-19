import { Request, Response, NextFunction } from "express"
import config from "../config/server"

export const index = (req: Request, res: Response, next: NextFunction) => {
  res.send({ title: config.title })
}
