import { Router } from "express";
import { RolController } from "../controllers/rol.controller";

const rolRouter: Router = Router();

// apiRouter.use('/services', servicesRouter)
rolRouter.get('/',RolController.getRol);
rolRouter.get('/load',RolController.loadRol);
rolRouter.post('/',RolController.createRol);
rolRouter.put('/',RolController.updateRol);
rolRouter.delete('/',RolController.deleteRol);

export default rolRouter;