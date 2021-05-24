import {Router} from 'express';
import noticiasCtrl from '../controllers/noticias.controllers';

const router = Router();

//Creamos las rutas

router.route('/').get(noticiasCtrl.getPrueba).post(noticiasCtrl.noticiaNueva);

export default router;