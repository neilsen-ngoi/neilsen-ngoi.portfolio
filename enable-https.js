const fs = require('fs')
const https = require('https')
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const privateKey = fs.readFileSync('./localhost.key', 'utf8')
const certificate = fs.readFileSync('./localhost.crt', 'utf8')
const credentials = { key: privateKey, cert: certificate }

app.use(express.static(path.join(__dirname, 'build')))

const httpsServer = https.createServer(credentials, app)

httpsServer.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
})
