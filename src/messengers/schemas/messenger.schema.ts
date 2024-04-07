import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MessengerDocument = HydratedDocument<Messenger>;

@Schema({ timestamps: true })
export class Messenger {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string

  @Prop({ required: true })
  cellphone: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, default: true })
  active: boolean
}

export const MessengerSchema = SchemaFactory.createForClass(Messenger);