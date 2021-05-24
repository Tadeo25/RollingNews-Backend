import NoticiaCollection from '../models/noticias.models'

const noticiasCtrl ={};

noticiasCtrl.getPrueba = (req, res)=>{
    res.send("Hola desde el servidor");
  };

  noticiasCtrl.noticiaNueva = async(req, res)=>{
      try {
          console.log(req.body.tituloNoticia);

    //Creo noticia para guardar en BD
          const nuevaNoticia = new NoticiaCollection({
              tituloNoticia:req.body.tituloNoticia,
              descripcionNoticia:req.body.descripcionNoticia,
              cuerpoNoticia:req.body.cuerpoNoticia,
              categoria:req.body.categoria
          })

    //Guardar objeto en BD
            await nuevaNoticia.save();

    //Enviar respuesta al frontend
            res.status(201).json({
                mensaje:"Noticia agregada correctamente 🤗"
            });

      } catch (error) {
          console.log(error);
          res.status(500).json({
              mensaje:"Ocurrio un error al intentar agragar la noticia 😵"
          })
      }

  };

  export default noticiasCtrl;

