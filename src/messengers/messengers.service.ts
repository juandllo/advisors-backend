import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Messenger } from './schemas/messenger.schema';
import { MessengerDto } from './dto/messenger.dto';

@Injectable()
export class MessengersService {
  constructor(@InjectModel(Messenger.name) private messengerModel: Model<Messenger>) {}

  async create(messengerDto: MessengerDto): Promise<Messenger> {
    const createdMessenger = new this.messengerModel(messengerDto);
    return createdMessenger.save();
  }

  async findAll(): Promise<Messenger[]> {
    return this.messengerModel.find().exec();
  }

  async findById(messengerId: string): Promise<MessengerDto> {
    return this.messengerModel.findById(messengerId).exec();
  }
}
