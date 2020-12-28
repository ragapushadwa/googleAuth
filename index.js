const express = require('express')
require('./models/users')
require('./services/passport')
const keys = require ('./config/keys')
const mongoose = require('mongoose')
const cookieSession=require('cookie-session')
const passport = require('passport')
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true })

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize())
app.use(passport.session())
require('./routers/authRoutes')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT)