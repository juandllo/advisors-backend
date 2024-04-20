import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';
import { OrderDto } from './dto/order.dto';
import { AccountGuard } from 'src/account/account.guard';

@Controller({
  path: 'orders',
  version: '1',
})
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  @UseGuards(AccountGuard)
  create(@Body() orderDto: OrderDto): Promise<Order> {
    return this.ordersService.create(orderDto);
  }

  @Get()
  @UseGuards(AccountGuard)
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':orderId')
  @UseGuards(AccountGuard)
  findById(@Param('orderId') orderId: string): Promise<OrderDto> {
    return this.ordersService.findById(orderId);
  }

  @Get('/user/:userId')
  @UseGuards(AccountGuard)
  findOrdersByUser(@Param('userId') userId: string): Promise<OrderDto[]> {
    return this.ordersService.findOrdersByUser(userId);
  }

  @Patch(':orderId')
  @UseGuards(AccountGuard)
  update(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: OrderDto,
  ): Promise<OrderDto> {
    return this.ordersService.update(orderId, updateOrderDto);
  }
}
