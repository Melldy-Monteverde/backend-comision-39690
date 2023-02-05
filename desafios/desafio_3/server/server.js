const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const usersList = require('./users.json')

app.get('/', (req, res) => {
  res.send(`API alive ${PORT}`)
})

app.get('/json', (req, res) => {
  res.json({ message: 'my first API with express responding with jason format' })
})

app.get('/wellcome/:name/:lastname/:age', (req, res) => {
  console.log(req.params)
  const { name, lastname, age } = req.params
  return res.json({
    ok: true,
    status: 200,
    message: `hi, my name is ${name} ${lastname} and i ${age} years old!`
  })
})

// respondiendo con formato json
app.get('/users', (req, res) => {
  return res.json({
    ok: true,
    message: 'users list',
    users: usersList.users
  })
})

// ruta con query params y params
app.get('/users/:userId', (req, res) => {
  console.log('query params', req.params)
  const { userID } = req.params

  if (isNaN(userID)) {
    return res.json({
      ok: true,
      message: `user with id ${userID} not exists`,
      queryParams: req.params
    })
  }

  const user = usersList.users.find(u => u.id === Number(userID))

  if (!user) {
    return res.json({
      ok: true,
      message: `user with id ${userID} not exists`,
      queryParams: req.params
    })
  }
})

app.post('/users', (req, res) => {
  const userBody = req.body
  console.log(userBody)
  const lastId = usersList.users[usersList.length - 1].id
  const newUser = { id: lastId + 1, ...usersList }
  res.json({
    ok: true,
    message: 'user was created',
    user: userBody
  })
})


app.listen(PORT, () => {
  console.log(`linstening on PORT ${PORT}`)
})
