import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByPosition('user')
    await user.$set('roles',[role.id])
    user.roles = [role]
    return user
  }

  async getAllUsersByAdministrator() {
    return await this.userRepository.findAll({include:{all: true}});
  }

  async getAllUsersByBoss() {
    return await this.userRepository.findAll();
  }

  async getUser() {
    return await this.userRepository.findAll({include:{all: true}});
  }

  async getUsersByEmail(email: string){
    return await this.userRepository.findOne({where: {email}, include: {all: true}})
  }
}

