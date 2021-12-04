import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"
import { Parameter } from "./parameter.model"

@Table({ tableName: 'widgets' })
export class Widget extends Model {
	@Column({allowNull: false})
	name: string;

	@Column({allowNull: false})
	serviceName: string;

	@Column({allowNull: false})
	index: number;

	@ForeignKey(() => User)
	@Column
	userId: number;

	@BelongsTo(() => User)
	user: User

	@HasMany(() => Parameter)
	parameters: Parameter[]
}