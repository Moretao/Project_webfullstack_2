import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'

import login from './src/routes/login.js'
import users from './src/routes/users.js'
import cities from './src/routes/cities.js'
import database from './src/config/database.js'
import installation from './src/routes/installation.js'

dotenv.config()

const app = express()

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 3600000
    }
}))

database.sync({ force: true })

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/installation', installation)
app.use('/login', login)
app.use('/users', users)
app.use('/cities', cities)
app.get('/', (req, res) => {
    res.status(200).send({ msg: 'OK!' })
})

app.listen(3000)

export default app
