const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// instances of class
const ProductManager = require('./productManager')
const prodManager = new ProductManager('./DB.json')

app.get('/', (req, res) => {
  res.json({ message: 'to see the product list go to the /products endpoint or /products?limit= and insert a number' })
})

app.get('/products', async (req, res) => {
  const limit = Number(req.query.limit)
  const products = await prodManager.getAllProd()
  const limitedProducts = products.slice(0, limit)

  return limit
    ? res.status(200).json({ products: limitedProducts })
    : res.status(200).json(products)
})

app.get('/products/:pId', async (req, res) => {
  const pId = Number(req.params.pId)
  const product = await prodManager.getProdById(pId)

  return !product
    ? res.status(404).json({ message: `product with id: ${pId} not found [!]` })
    : res.status(200).json(product)

})

app.listen(PORT, console.log(`server listening on PORT ${PORT}`))
