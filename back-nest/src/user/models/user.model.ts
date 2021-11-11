import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';

@Table
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true, allowNull: false })
  id: number;
  @Column
  name: string;

  @Column
  password: string;
}