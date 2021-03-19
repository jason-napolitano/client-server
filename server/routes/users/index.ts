// Express app
import { Application } from "express"

// Controllers
import * as UserController from "../../controllers/UserController"

// Route configuration
export default function(app: Application) {
  // Example using URI parameters
  app.get("/users/:userId/photos/:photoId", UserController.index)
}
