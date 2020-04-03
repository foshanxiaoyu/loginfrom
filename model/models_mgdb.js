const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-auth',{ useNewUrlParser: true , useUnifiedTopology: true} )
// , useUnifiedTopology: true mongoose.connection.once('open',()=>{
//     console.log('connceted to database.')
// })

const UserSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
}) 

const User = mongoose.model('User',UserSchema)

module.exports = {
    User,

}