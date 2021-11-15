import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {

  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;

  @Column({unique: true, allowNull: false})
  name: string;

  @Column
  password: string;
}