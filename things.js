const express = require("express")
const app = express()

app.use(express.json())

app.use("/", require("./routes/fruit"))

app.listen(9000, () => {
    console.log("Running")
})

