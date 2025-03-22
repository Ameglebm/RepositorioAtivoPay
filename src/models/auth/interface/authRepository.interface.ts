export interface IAuthRepository {
    registerUser(email: string, password: string): Promise<void>;  
    loginUser(email: string, password: string): Promise<string>;   
    logoutUser(token: string): Promise<void>;
  }

  export interface User {
    id: string;
    nome: string;
    email: string;  
    createdAt: Date;
    updatedAt: Date;
  }