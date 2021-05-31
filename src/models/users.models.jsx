import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true,
        unique: true
    },
    ciudad:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: String,
        required: true,
        unique: true
    },
    cPostal:{
        type: String,
        required: true
    }

});

const UserCollection = mongoose.model('user', userSchema);

export default UserCollection;