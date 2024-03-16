import { Router } from "express";
import rolRouter from "./rol.route";

const apiRouter: Router = Router();

apiRouter.use('/rol', rolRouter);

export default apiRouter;