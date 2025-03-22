import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repository/authRepository';
import { RegisterUserDTO, LoginDTO } from '../dtos/authDTO';

@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

    async registerUser(data: RegisterUserDTO): Promise<void> {
        return this.authRepository.registerUser(data);
    }

    async loginUser(data: LoginDTO): Promise<any> {
        return this.authRepository.loginUser(data);
    }
}