import { Router } from "express";
import noticiasCtrl from "../controllers/noticias.controllers";

const router = Router();

//Creamos las rutas

router
  .route("/")
  .get(noticiasCtrl.noticiasInicio)
  .post(noticiasCtrl.noticiaNueva);
router
  .route("/:id")
  .delete(noticiasCtrl.eliminarNoticia)
  .put(noticiasCtrl.editarNoticia);
export default router;
