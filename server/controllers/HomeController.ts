import { Request, Response } from "express"

export const index = (req: Request, res: Response) => {
  const json = require('../models/demo.json')
  res.send(json)
}
