const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
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
        required:true
    },
    username:{
        type: String,
        required:true,
        index: { unique: true }
    },
    password:{
        type: String,
        required: true
    }
})