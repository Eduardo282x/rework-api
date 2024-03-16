import { Router } from "express";
import rolRouter from "./rol.route";
import authRouter from "./auth.route";

const apiRouter: Router = Router();

apiRouter.use('/rol', rolRouter);
apiRouter.use('/auth', authRouter);

export default apiRouter;