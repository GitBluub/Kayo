import { BelongsTo, Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"

@Table({ tableName: 'subscriptions' })
export class Subscription extends Model {
  	@Column({allowNull: false, unique: true})
  	name: string;

	@Column
	token: string;

	@ForeignKey(() => User)
	@Column
	userId: number;

	@BelongsTo(() => User)
	user: User
}