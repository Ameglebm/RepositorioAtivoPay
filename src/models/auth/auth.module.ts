import { Module } from '@nestjs/common';
import { AuthController } from './controller/authController';
import { AuthService } from './service/authservice';

@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
