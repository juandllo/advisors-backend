import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export type Role = {
  roleName: 'admin' | 'advisor';
};

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  cellphone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Array })
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
