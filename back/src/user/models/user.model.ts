import { Subscription } from 'src/subscription/models/subscription.model';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Widget } from 'src/widget/models/widget.model';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({unique: true, allowNull: false})
  username: string;

  @Column
  password: string;

  @HasMany(() => Widget)
  widgets: Widget[]

  @HasMany(() => Subscription)
  subscriptions: Subscription[]

  @Column
  provider: string

  @Column
  providerId: string
}