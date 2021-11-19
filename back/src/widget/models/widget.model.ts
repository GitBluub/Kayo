import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from "../../user/models/user.model"

@Table({ tableName: 'widgets' })
export class Widget extends Model {
	@Column({allowNull: false})
	name: string;

	@ForeignKey(() => User)
	userId: number;

	@BelongsTo(() => User)
	user: User
}
@Table({ tableName: 'parameters'})
export class Parameter extends Model {
	@Column
	name: string

	@Column
	type: string;

	@Column
	value: string;

	@ForeignKey(() => Widget)
	widgetId: number;

	@BelongsTo(() => Widget)
	widget: Widget
}