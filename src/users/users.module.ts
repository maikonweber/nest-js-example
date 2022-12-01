import { Module } from '@nestjs/common';
import { userController } from './usuario.controller';

@Module({
    imports: [],
    controllers: [userController],
    providers: [],
    })
    export class userModules {}