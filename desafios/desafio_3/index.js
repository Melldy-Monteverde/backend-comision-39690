console.log('nodemon is running')

const http = require('http')
const PORT = 8080

const srv = http.createServer((req, res) => {
  res.send('hi from the server')
})

srv.listen(PORT, () => {
  console.log(`server is listening on PORTH ${PORT}`)
})
