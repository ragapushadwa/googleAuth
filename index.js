const express = require('express')
const passport =require('passport')
const GoogleStrategy = require ('passport-google-oauth20').Strategy
const keys = require ('./config/keys')
const app = express()

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},
accessToken=>{
    console.log(accessToken)
}
)
)

//246150108979-9tr7meehpd94def9et6o1gfjdc54qest.apps.googleusercontent.com
//XNBwBS9bSOB0oS5QQGS1sdMw

app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))

const PORT = process.env.PORT || 5000
app.listen(PORT)