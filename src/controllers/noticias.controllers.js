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
              imagen:req.body.imagen,
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
              mensaje:"Ocurrio un error al intentar agragar la noticia a inicio😵"
          })
      }

  };

  noticiasCtrl.noticiasInicio = async(req, res)=>{
      try {
    //Obtener arreglo con los productos
          const arregloNoticia = await NoticiaCollection.find();
    //Respondemos al frontend
          res.status(200).json(arregloNoticia);
      } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje:"Ocurrio un error al intentar agragar la noticia 😵"
        });
      }
  };

  noticiasCtrl.eliminarNoticia = async (req, res)=>{
      try {
          console.log(req.params.id);
          await NoticiaCollection.findByIdAndDelete(req.params.id);
          res.status(200).json({
            mensaje:"La noticia fue eliminada 🤗"
        });

      } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje:"Ocurrio un error al ieliminar la noticia 😵"
        });
      }
  };

  noticiasCtrl.editarNoticia = async(req, res)=>{
      try {
          await NoticiaCollection.findByIdAndUpdate(req.params.id, req.body);
          res.status(200).json({
              mensaje:"El producto fue modificado 😀"
          })
      } catch (error) {
          console.log(error);
          res.status(404).json({
              mensaje:"No se pudo editar producto"
          })
      }
  };

  noticiasCtrl.obtenerNoticia = async(req, res)=>{
      try {
          const searchNoticia = await NoticiaCollection.findById(req.params.id);
          res.status(200).json(searchNoticia);
      } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:"No se pudo encontrar el producto"
        })
      }
  }

  export default noticiasCtrl;

