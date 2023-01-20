const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    userName: {
        type: String, 
        unique: true, 
        required: true, 
        maxLength: 20
    }, 
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    gender: {
        type: String, 
        enum: [
            'Male', 
            'Female'
        ]
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)