import { prisma } from 'src/lib/prisma'
import { IAuthRepository } from "../interface/authRepository.interface";
import { RegisterUserDTO} from '../dtos/authDTO';

export class AuthRepository implements IAuthRepository {
    async registerUser(data: RegisterUserDTO): Promise<void> {
        await prisma.users.create({
            data: {
                email: data.email,
                senha: data.senha,
                nome: data.nome,
            },
        });
    }
}
