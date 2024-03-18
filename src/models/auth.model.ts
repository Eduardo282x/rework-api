export interface Login {
    username: string;
    password: string;
}

export interface Register {
    username: string;
    email: string;
    isEmploye: boolean;
    password: string;

    country?: string;
    area?: string;
    phone?: string;
}