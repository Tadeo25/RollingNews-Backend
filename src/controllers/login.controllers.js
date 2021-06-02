import loginCollection from '../models/login.models'
import bcryptjs from 'bcryptjs';

const loginCtrl = {};


loginCtrl.postPrueba = async(req, res) => {
    const mail = req.body.mail;
    const contrasena = req.body.contrasena;

    if (mail == 'admin@rollingnews.com' && contrasena == 'admin2021') {

        let contrasenaHash = await bcryptjs.hash(contrasena, 8);
        res.status(201).json({
            mensaje: "Login correcto 🤗",
            contrasenaHash: contrasenaHash
        });

    } else {
        res.status(500).json({
            mensaje: "Login incorrecto 😵",
            contrasena: contrasena
        })
    }
}

export default loginCtrl;