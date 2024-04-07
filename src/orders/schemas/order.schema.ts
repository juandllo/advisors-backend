import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import { Messenger } from '../../messengers/schemas/messenger.schema';

export type OrderDocument = HydratedDocument<Order>;

//TODO se debe corregir la manera en la que se gestionan los productos dentro de la orden
export type Product = {
  name: string;
  desc: string;
  amount: number;
  quantity: number;
}

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Messenger" })
  messenger: Messenger;

  @Prop({ required: true })
  total: number;          
  
  @Prop({ required: true, type: mongoose.Schema.Types.Array })
  product: Product[];

  @Prop({ required: true, default: "Nueva" })
  status: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);