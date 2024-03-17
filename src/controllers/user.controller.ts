import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base-response.model";
import { Usuario } from "../models/user.model";

const updateProfile = async (req: Request, res: Response) => {
    const userBody: Usuario = req.body

    const updateRol = await prismaClient.user.update({
        where: {idUser: userBody.idUser},
        data: {
            name: userBody.name,
            lastname: userBody.lastname,
            username: userBody.username,
            description: userBody.description,
            skills: userBody.skills,
            date: userBody.date,
            age: userBody.age,
            country: userBody.country,
            email: userBody.email,
            phone: userBody.phone,
        }
    });

    console.log(updateRol);

    const response: BaseResponse = {
        message: 'Perfil actualizado exitosamente.',
        success: true,
        statusCode: 200
    };
    res.send(response);
}

export const UserController = {
    updateProfile
}