import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CreateUsers } from "../../interface";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";


@Table({tableName: 'users'})
export class User extends Model<User, CreateUsers> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: true})
  email: string;

  @Column({type: DataType.STRING, allowNull: true})
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}