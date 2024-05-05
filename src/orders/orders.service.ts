import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(orderDto: OrderDto): Promise<Order> {
    const createdDto = new this.orderModel(orderDto);
    return createdDto.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findById(orderId: string): Promise<OrderDto> {
    return this.orderModel.findById(orderId).exec();
  }

  async findOrdersByUser(userId: string): Promise<OrderDto[]> {
    return this.orderModel.find({ user: userId }).exec();
  }

  async update(orderId: string, updateOrderDto: OrderDto): Promise<Order> {
    return this.orderModel.findOneAndUpdate({ _id: orderId }, updateOrderDto, {
      new: true,
    });
  }
}
