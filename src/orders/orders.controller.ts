import { Controller, Body, Get, Post, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';
import { OrderDto } from './dto/order.dto';

@Controller({
  path: "orders",
  version: "1"
})
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() orderDto: OrderDto): Promise<Order> {
    return this.ordersService.create(orderDto);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(":orderId")
  findById(@Param("orderId") orderId: string): Promise<OrderDto> {
    return this.ordersService.findById(orderId);
  }

  @Patch(":orderId")
  update(@Param("orderId") orderId: string, @Body() updateOrderDto: OrderDto): Promise<OrderDto> {
    return this.ordersService.update(orderId, updateOrderDto);
  }
}
