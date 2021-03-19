// Express app
import { Application } from "express"

// Controllers
import * as HomeController from "../../controllers/HomeController"

// Route configuration
export default function(app: Application) {
  app.get("/", HomeController.index)
}
