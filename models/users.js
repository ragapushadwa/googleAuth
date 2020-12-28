const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleID:String,
    name:String
})

mongoose.model('users',userSchema)