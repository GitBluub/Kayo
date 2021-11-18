import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"

@Table({ tableName: 'widgets' })
export class Widget extends Model {
  	@Column({allowNull: false})
  	name: string;

	@Column
	params: Array<number | string>

	@BelongsTo(() => User)
	@Column
	user: User
}