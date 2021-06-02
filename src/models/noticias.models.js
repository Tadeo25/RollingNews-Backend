import mongoose, {Schema} from "mongoose";

const noticiaSchema = new Schema({
    tituloNoticia:{
        type: String,
        required: true,
        unique: true
    },
    descripcionNoticia:{
        type: String,
        required: true,
        unique: true
    },
    cuerpoNoticia:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true,
    },
    imagen:{
        type: String,
        required: true
    }
});

const NoticiaCollection = mongoose.model('noticia',noticiaSchema );

export default NoticiaCollection;