import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base-response.model";
import { Usuario } from "../models/user.model";

const updateProfile = async (req: Request, res: Response) => {
    const userBody: Usuario = req.body

    const updateProfile = await prismaClient.user.update({
        where: {idUser: userBody.idUser},
        data: {
            fullName: userBody.fullName,
            country: userBody.country,
            ocupation: userBody.ocupation,
            description: userBody.description,
            skills: userBody.skills,
            experience: userBody.experience
        }
    });

    const response: BaseResponse = {
        message: 'Perfil actualizado exitosamente.',
        success: true,
        statusCode: 200
    };
    res.send(response);
}

const getProfile = async (req: Request, res: Response) => {
    const userBody: Usuario = req.body

    const getUser = await prismaClient.user.findFirst({
        where: {idUser: userBody.idUser},
    });

    const response: BaseResponse = {
        message: 'Perfil actualizado exitosamente.',
        success: true,
        statusCode: 200,
        data: getUser
    };
    res.send(response);
}

export const UserController = {
    updateProfile,
    getProfile
}