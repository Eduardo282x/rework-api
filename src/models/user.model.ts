export interface Usuario {
    idUser: number;
    username: string;
    password: string;
    email: string;

    fullName: string;
    country: string;
    ocupation: string;
    description: string;
    skills: string;
    experience: string;
}
export interface Company {
    idCompany: number;
    nameCompany: string;
    country: string;
    area: string;
    email: string;
    phone: string;
    password: string;
}