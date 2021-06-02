import { Router } from "express";
import usersCtrl from '../controllers/user.controllers'

const router = Router();

router.route("/").get(usersCtrl.getPrueba);
export default router;