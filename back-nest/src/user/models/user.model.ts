import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column
  name: string;

  @Column
  password: string;
}