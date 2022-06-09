const os = require("os");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello service from ' + os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})