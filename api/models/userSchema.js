import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
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
    createAt:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const userModel = mongoose.model('user', userSchema);

export default userModel;