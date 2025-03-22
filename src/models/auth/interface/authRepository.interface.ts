export interface IAuthRepository {
    registerUser(email: string, senha: string): Promise<void>;  
    loginUser(email: string, senha: string): Promise<string>;   
    logoutUser(token: string): Promise<void>;
  }

  export interface User {
    id: string;
    nome: string;
    email: string;  
    createdAt: Date;
    updatedAt: Date;
  }