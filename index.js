const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000

const chefs = require("./data/chefs.json")
const recipes = require("./data/recipes.json")

app.use(cors())



app.get('/', (req, res) => {
  res.send(chefs)
})


app.get('/recipe/:id', (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find(recipe => recipe.id === id)
  res.send(recipe)
})




app.listen(port, () => {
  console.log(`Example app ${port}`)
})