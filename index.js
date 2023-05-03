const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000

const chefs = require("./data/chefs.json")

app.use(cors())



app.get('/', (req, res) => {
  res.send(chefs)
})




app.listen(port, () => {
  console.log(`Example app ${port}`)
})