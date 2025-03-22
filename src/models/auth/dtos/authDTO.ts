import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';


export class RegisterUserDTO {
    @ApiProperty({ example: 'Joao', description: 'Nome do usuario'})
    @IsString({ message: 'O nome temque ser uma string' })
    nome: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuario'})
    @IsString({message: 'A senha tem que ser uma string'})
    senha: string;

    @ApiProperty({ example: 'usuario@usuario', description: 'Email do usuario'})
    @IsString({ message: 'O email tem que ser uma string'})
    email: string;

}

export class LoginDTO {
    @ApiProperty({ example: 'usuario@usuario', description: 'Email do usuario'})
    @IsString({ message: 'O email tem que ser uma string'})
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha do usuario'})
    @IsString({ message: 'A senha tem que ser uma string'})
    senha: string;
}