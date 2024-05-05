import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MessengersService } from './messengers.service';
import { Messenger } from './schemas/messenger.schema';
import { MessengerDto } from './dto/messenger.dto';
import { AccountGuard } from 'src/account/account.guard';

@Controller({
  path: 'messengers',
  version: '1',
})
export class MessengersController {
  constructor(private readonly messengersService: MessengersService) { }

  @Post()
  @UseGuards(AccountGuard)
  create(@Body() messengerDto: MessengerDto): Promise<Messenger> {
    return this.messengersService.create(messengerDto);
  }

  @Get()
  @UseGuards(AccountGuard)
  findAll(): Promise<Messenger[]> {
    return this.messengersService.findAll();
  }

  @Get(':messengerId')
  @UseGuards(AccountGuard)
  findById(@Param('messengerId') messengerId: string): Promise<MessengerDto> {
    return this.messengersService.findById(messengerId);
  }
}
