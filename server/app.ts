// Dependencies
import express from "express"
const cors = require("cors")
const compression = require("compression")
const config = require('./config')
var helmet = require('helmet')
const app = express()
app.use(compression());
app.use(helmet());

// Global CORS (CORS Package)
app.use(cors(config.corsOptions))

// Dotenv library
import dotenv from "dotenv"
dotenv.config()

// Routing
import userRoutes from "./routes/users"
import authRoutes from "./routes/auth"
import appRoutes from "./routes/app"
userRoutes(app)
authRoutes(app)
appRoutes(app)

// Body-parser
import bodyParser from "body-parser"
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// App configuration
app.set("port", process.env.SERVER_PORT || 4900)
app.listen(app.get("port"), () => {
  console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"))
  console.log("Press CTRL-C to stop\n")
})
export default app
