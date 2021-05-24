import NoticiaCollection from '../models/noticias.models'

const noticiasCtrl ={};

noticiasCtrl.getPrueba = (req, res)=>{
    res.send("Hola desde el servidor");
  };

  export default noticiasCtrl;

