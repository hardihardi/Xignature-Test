let express = require("express")
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let mongo = require("./db/database")
let cors = require("cors")

const REST_API = require("../backend/routes/file.route")

mongoose.Promise = global.Promise
mongoose
  .connect(mongo.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected")
    },
    err => {
      console.log(err)
    }
  )

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors())

app.use("/public", express.static("public"))
app.use("/api", REST_API)

const port = process.env.PORT || 8888

app.listen(port, () => {
  console.log("Connected : " + port)
})

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Error occured"))
  })
})
