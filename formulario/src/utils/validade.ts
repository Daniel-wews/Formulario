import { User } from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (data: User) => {
    const errors: Error = {};

    if (!data.name) {
        errors['name'] = "o nome é obrigatorio"
    }

    if (!data.email) {
        errors['email'] = "o email é obrigatorio"
    }

    if (!data.agree) {
        errors['agree'] = "você precisa concordar com os termos!"
    }
    return errors
}