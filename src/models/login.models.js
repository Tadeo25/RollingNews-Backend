import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema({
    mailLogin: {
        type: String,
        required: true,
        unique: true
    },
    contrasenaLogin: {
        type: String,
        required: true,
        unique: true
    }
});
const loginCollection = mongoose.model('login', loginSchema);

export default loginCollection;