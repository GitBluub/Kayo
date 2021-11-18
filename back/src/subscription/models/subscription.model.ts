import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"

@Table({ tableName: 'subscriptions' })
export class Subscription extends Model {
  	@Column({allowNull: false})
  	name: string;

	@Column
	token: string;

	@BelongsTo(() => User)
	@Column
	user: User
}