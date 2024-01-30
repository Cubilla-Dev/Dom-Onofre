const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: [true, "Name is required"],
        minLength: 3
    },
    first_name: {
        type: String, 
        require: [true, "First Name is required"],
        minLength: 3
    },
    email: {
        type: String, 
        require: [true, "Email is required"],
    },
    passwordhash: {
        type: String, 
        require: [true, "Password is required"],
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);

module.exports = User;














