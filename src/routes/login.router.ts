import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateDataLogin from '../middlewares/loginMiddleware';

const router = Router();

const userController = new UserController();

router.post('./login', validateDataLogin, userController.login.bind(userController));

export default router;