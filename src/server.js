const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const proxy = require("./proxy")
const app = express()
const port = 3100

const json = express.json({ type: '*/json' })
app.use(cors())
app.use(json)
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/proxy/v1/hello', async (req, res) => {
  res.json({ code: 200, data: 'hello!' })
})

app.listen(port, () => {
  console.log(`Proxy app listening on port ${port}`)
})