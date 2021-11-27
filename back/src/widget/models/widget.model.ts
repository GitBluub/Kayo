import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"
import { Parameter } from "./parameter.model"

@Table({ tableName: 'widgets' })
export class Widget extends Model {
	@Column({allowNull: false})
	name: string;

	@ForeignKey(() => User)
	userId: number;

	@BelongsTo(() => User)
	user: User

	@HasMany(() => Parameter)
	parameters: Parameter[]
}