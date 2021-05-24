import mongoose, {Schema} from "mongoose";

const noticiaSchema = new Schema({
    tituloNoticia:{
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    descripcionNoticia:{
        type: String,
        maxlength: 100,
        unique: true
    },
    cuerpoNoticia:{
        type: String,
        required: true,
        maxlength: 3000
    },
    categoria:{
        type: String,
        required: true,
        maxlength: 20
    }
});

const NoticiaCollection = mongoose.model('noticia',noticiaSchema );

export default NoticiaCollection;