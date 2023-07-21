import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
const server = express()
var cors = require('cors')
server.use(cors())
dotenv.config()
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended:true}))




server.listen()