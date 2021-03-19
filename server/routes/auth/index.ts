// Express app
import { Application } from "express"

// Controllers
import * as AuthController from "../../controllers/AuthController";

// Route configuration
export default function(app: Application) {
  app.get("/auth", AuthController.index)
}
