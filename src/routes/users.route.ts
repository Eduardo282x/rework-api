import { Router } from "express";
import { UserController } from "../controllers/user.controller";
const userRouter: Router = Router();

userRouter.put('/',UserController.updateProfile);

export default userRouter;