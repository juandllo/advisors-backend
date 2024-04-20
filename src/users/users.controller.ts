import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { AccountGuard } from 'src/account/account.guard';

@Controller({
  path: 'users',
  version: '1',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @UseGuards(AccountGuard)
  create(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto);
  }

  @Get()
  @UseGuards(AccountGuard)
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':userId')
  @UseGuards(AccountGuard)
  findById(@Param('userId') userId: string): Promise<UserDto> {
    return this.usersService.findById(userId);
  }
}

