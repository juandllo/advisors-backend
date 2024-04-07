import { Module } from '@nestjs/common';
import { MessengersController } from './messengers.controller';
import { MessengersService } from './messengers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Messenger, MessengerSchema } from './schemas/messenger.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Messenger.name, schema: MessengerSchema }])],
  controllers: [MessengersController],
  providers: [MessengersService]
})
export class MessengersModule {}
