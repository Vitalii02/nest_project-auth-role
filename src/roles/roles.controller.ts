import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto){
      return this.roleService.createRole(dto);
    }

    @Get('/:position')
    getByPosition(@Param('position')position: string){
      return this.roleService.getRoleByPosition(position);
    }
}
