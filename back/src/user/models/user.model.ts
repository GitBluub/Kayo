import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({unique: true, allowNull: false})
  name: string;

  @Column
  password: string;

}