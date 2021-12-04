import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Widget } from './widget.model';

export interface ParamInterface {
	name: string,
	value: string
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
	@Column
	widgetId: number;

	@BelongsTo(() => Widget)
	widget: Widget
}