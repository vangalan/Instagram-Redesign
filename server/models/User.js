const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true 
    },
    username:{
        type: String,
        required:true,
        unique: true 
    },
    password:{
        type: String,
        required: true
    },
    Date:{
        type: Date, default: Date.now
    }
});


module.exports = User = mongoose.model('user', userSchema);
