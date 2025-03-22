import { BadRequestException, Controller, Inject, Post, Body, UnauthorizedException, InternalServerErrorException } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, } from "@nestjs/swagger"
import { RegisterUserDTO, LoginDTO } from "../dtos/authDTO";
import { AuthService } from '../service/authservice'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(@Inject('IAuthService') private readonly authService: AuthService) {}

    @ApiOperation({ summary: 'Registrar um usuario novo' })
    @ApiResponse({ status: 201, description: 'Usuario criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Erro ao registrar' })
    @Post('registrar')
    async registerUser(@Body() newUserData: RegisterUserDTO) {
        try {
        await this.authService.registerUser(newUserData);
        return { message: 'Usuario criado com sucesso' };
        } catch (error) {
        throw new BadRequestException('Erro ao registrar o usuario');
        }
    }
 }

    @ApiOperation({ summary: 'Realizar Login'})
    @ApiResponse({ status: 200, description: 'Login realizado com sucesso'})
    @ApiResponse({ status: 400, description: 'Erro de validação'})
    @ApiResponse({ status: 401, description: 'Credenciais isdas'})
    @Post('login')
    async loginUser(@Body() loginData: LoginDTO) {
        try {
        await this.authService.loginUser(login);
        } catch (error) {
        if (error instanceof UnauthorizedException) {
            throw new UnauthorizedException('Credenciais invalidas');
        }
        throw new InternalServerErrorException('Erro ao realizar login');
        }
    }