import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { JwtAuthGuards } from "../auth/jwt-auth.guards";

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.usersService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuards)
  @Get()
  getAll() {
    return this.usersService.getAllUsersByAdministrator();
  }
}


