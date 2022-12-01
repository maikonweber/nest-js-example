import { Body, Controller, Get, Post } from '@nestjs/common';
import { userRepository } from './users.repository';

@Controller('/users')

export class userController {
 private userRepository = new userRepository()
 @Post()
 async createUser(@Body() userDate) {
  this.userRepository.salvar(userDate);
  return 'create users';
 }

 @Get()
 async listUser() {
 return  this.userRepository.show()
 }
}