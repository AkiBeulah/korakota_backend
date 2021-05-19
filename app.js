const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT || 3001

var corsOptions = {
	origin: "*"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(PORT, () => {
	console.log(`Server is now running on port: ${PORT}...`)
})


//routes
app.get("/", (req, res) => {
	res.json({ message: "Welcome to KoraKota's API, have you lost your way?" })
})
