import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessengersService } from './messengers.service';
import { Messenger } from './schemas/messenger.schema';
import { MessengerDto } from './dto/messenger.dto';

@Controller({
  path: "messengers",
  version: "1"
})
export class MessengersController {
  constructor(private readonly messengersService: MessengersService) {}

  @Post()
  create(@Body() messengerDto: MessengerDto): Promise<Messenger> {
    return this.messengersService.create(messengerDto);
  }

  @Get()
  findAll(): Promise<Messenger[]> {
    return this.messengersService.findAll();
  }

  @Get(":messengerId")
  findById(@Param("messengerId") messengerId: string): Promise<MessengerDto> {
    return this.messengersService.findById(messengerId);
  }
}
