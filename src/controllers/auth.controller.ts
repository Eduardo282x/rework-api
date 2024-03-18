import { Request, Response } from "express";
import { prismaClient } from "./base.controller";
import { BaseResponse } from "../models/base-response.model";
import { Login, Register } from "../models/auth.model";


const response: BaseResponse = {
    message: `Bienvenido`,
    success: true,
    statusCode: 200,
    // data: user
};

const login = async (req: Request, res: Response) => {
    const bodyLogin: Login = req.body;

    const user = await prismaClient.user.findFirst(
        {
            where: {
                username: bodyLogin.username,
                password: bodyLogin.password
            }
        }
    );

    if(user){
        response.message = `Bienvenido ${user?.username}`,
        response.success = true,
        response.statusCode = 200,
        response.data = user
    } else {
        response.message = `Usuario no encontrado`,
        response.success = false,
        response.statusCode = 400
        response.data = null
    }

    res.send(response);
}

const register = async (req: Request, res: Response) => {
    const bodyRegister: Register = req.body;

    if(bodyRegister.isEmploye){
        const registerEmploye = await prismaClient.user.create({
            data: {
                username: bodyRegister.username,
                email: bodyRegister.email,
                password: bodyRegister.password,
                isEmploye: "Empleado"
            }
        });

        if(registerEmploye){
            response.message = 'Registro completo.',
            response.success = true,
            response.statusCode = 200,
            response.data = registerEmploye
        } 
    } else {
        const registerCompany = await prismaClient.user.create({
            data: {
                username: bodyRegister.username,
                country: bodyRegister.country,
                area: bodyRegister.area,
                email: bodyRegister.email,
                password: bodyRegister.password,
                phone: bodyRegister.phone,
                isEmploye: "Empresa"
            }
        });

        if(registerCompany){
            response.message = 'Registro completo.',
            response.success = true,
            response.statusCode = 200,
            response.data = registerCompany
        } 
    }


    res.send(response);
}

export const AuthController = {
    login,
    register
}