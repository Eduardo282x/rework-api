import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base-response.model";
import { Login, Register } from "../models/auth.model";


const login = async (req: Request, res: Response) => {
    const bodyLogin: Login = req.body;

    const user = await prismaClient.user.findFirst(
        {
            where: {
                email: bodyLogin.email,
                password: bodyLogin.password
            },
            include: {
                rol: true
            }
        }
    );

    const response: BaseResponse = {
        message: `Bienvenido ${user?.name}`,
        success: true,
        statusCode: 200,
        data: user
    };
    res.send(response);
}

const register = async (req: Request, res: Response) => {
    const bodyRegister: Register = req.body

    const register = await prismaClient.user.create({
        data: {
            email: bodyRegister.email,
            name: bodyRegister.name,
            lastname: bodyRegister.lastname,
            password: bodyRegister.password,
            rolId: bodyRegister.isEmploye ? 1 : 2,
        }
    });

    const response: BaseResponse = {
        message: 'Registro completo.',
        success: true,
        statusCode: 200,
        data: register
    };
    res.send(response);
}

export const AuthController = {
    login,
    register
}