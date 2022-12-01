import { Module } from '@nestjs/common';
import { userController } from './users/usuario.controller';
import { userModules } from './users/users.module';


@Module({
  imports: [userModules],
})

export class AppModule {}
