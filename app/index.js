const express = require('express')
const app = express()

require('dotenv').config()
const config = require('./config/values.js')

app.set('port', config.PORT)

app.listen(app.get('port'), () => {
    console.log(`[app] server on port: ${app.get('port')}`)
})

app.get('/', (req, res) => {
    res.send("Hola mundo")
})