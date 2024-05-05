import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { SALT } from '../constants';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(userDto: UserDto) {
    if (userDto.password) {
      const plainToHash = await bcrypt.hash(userDto.password, Number(SALT));
      userDto = { ...userDto, password: plainToHash };
    }

    return new this.userModel(userDto).save();
  }

  async findAll(): Promise<UserDto[]> {
    return this.userModel.find().exec();
  }

  async findById(userId: string): Promise<UserDto> {
    return this.userModel.findById(userId).exec();
  }

  async findByEmail(email: string): Promise<UserDto | undefined> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
