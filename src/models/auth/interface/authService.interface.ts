export interface AuthService {
    register(email: string, senha: string): Promise<void>;
    login(email: string, senha: string): Promise<string>;
    logout(token: string): Promise<void>;
}