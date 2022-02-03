import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateRoles } from "../../interface";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";


@Table({tableName: 'roles'})
export class Role extends Model<Role, CreateRoles> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: true})
  position: string;

  @Column({type: DataType.STRING})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}