export interface AuthService {
    register(email: string, password: string): Promise<void>;
    login(email: string, password: string): Promise<string>;
    logout(token: string): Promise<void>;
    refreshToken(token: string): Promise<string>;
}