import { Request, Response, NextFunction } from "express"

export const index = (req: Request, res: Response, next: NextFunction) => {
  // Navigating to /users/123/photos/321 will produce { userId: 123, photoId: 321 }
  res.send({ userId: req.params.userId, photoId: req.params.photoId })
}
