import { Router } from "express";
import rolRouter from "./rol.route";
import authRouter from "./auth.route";
import userRouter from "./users.route";

const apiRouter: Router = Router();

apiRouter.use('/rol', rolRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);

export default apiRouter;