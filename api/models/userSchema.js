import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    cpf:{
        type: String,
        require: true,
        unique: true
    },
    name:{
        type: String,
        require: true,
        unique: false
    },
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password:{
        type: String,
        require: true,
        select: false
    },
    cod:{
        type: String,
        require: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model('user', userSchema);

export default userModel;