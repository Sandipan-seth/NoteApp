const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/miniProj');

let userSchema= mongoose.Schema({
    username : String,
    name : String,
    email: String,
    age : Number,
    password: String,
    profilePic: {
        type: String,
        default: 'boy.png'
    },
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})


module.exports = mongoose.model('user',userSchema);