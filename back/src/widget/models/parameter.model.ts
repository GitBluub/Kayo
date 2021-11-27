import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Widget } from './widget.model';

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