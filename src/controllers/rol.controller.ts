// import { Request, Response } from "express";
// import { prismaClient } from "./base.controller";
// import { BaseResponse } from "../models/base-response.model";


// const getRol = async (req: Request, res: Response) => {
//     const roles = await prismaClient.rol.findMany();
//     res.send(roles);
// }

// const loadRol = async (req: Request, res: Response) => {

//     const roles: string[] = ['Empresa', 'Empleado'];

//     for(const rol of roles){
//         const newRol = await prismaClient.rol.create({
//             data: {
//                 description: rol
//             }
//         })
//     }

//     const response: BaseResponse = {
//         message: 'Roles creados exitosamente.',
//         success: true,
//         statusCode: 200
//     };
//     res.send(response);
// }

// const updateRol = async (req: Request, res: Response) => {
//     const {idRol, description} = req.body

//     const updateRol = await prismaClient.rol.update({
//         where: {idRol: idRol},
//         data: {description: description}
//     });

//     console.log(updateRol);

//     const response: BaseResponse = {
//         message: 'Rol actualizado exitosamente.',
//         success: true,
//         statusCode: 200
//     };
//     res.send(response);
// }

// const createRol = async (req: Request, res: Response) => {
//     const {description } = req.body

//     const newRol = await prismaClient.rol.create({
//         data: {description: description}
//     });

//     console.log(newRol);

//     const response: BaseResponse = {
//         message: 'Rol creado exitosamente.',
//         success: true,
//         statusCode: 200
//     };
//     res.send(response);
// }
// const deleteRol = async (req: Request, res: Response) => {
//     const {idRol} = req.body

//     const deleteRol = await prismaClient.rol.delete({
//         where: {idRol: idRol},
//     });

//     console.log(deleteRol);

//     const response: BaseResponse = {
//         message: 'Rol Eliminado exitosamente.',
//         success: true,
//         statusCode: 200
//     };
//     res.send(response);
// }

// export const RolController = {
//     createRol,
//     getRol,
//     updateRol,
//     loadRol,
//     deleteRol
// }