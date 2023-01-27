const express = require('express'); 
const dotenv = require('dotenv'); 
const connectDB = require('./config/db')
const logger = require('./utils/logger')
const user = require('./routes/user');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config({ path: './config/config.env' })

connectDB(); 

const app = express(); 

app.use(bodyParser.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5001; 

app.use(logger)
app.use('/user', user)

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})