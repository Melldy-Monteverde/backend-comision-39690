const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const API_BASE_PATH = '/api'

const initialPhrase = "first phrase"

app.get('/', (req, res) => {
  return res.json({
    ok: true,
    message: `message`,
  })
})

app.post('/', (req, res) => {
  return res.json({
    ok: true,
    message: `message`,
  })
})

app.put('/', (req, res) => {
  return res.json({
    ok: true,
    message: `message`,
  })
})

app.delete('/', (req, res) => {
  return res.json({
    ok: true,
    message: `message`,
  })
})
