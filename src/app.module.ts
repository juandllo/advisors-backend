import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { MessengersModule } from './messengers/messengers.module';

@Module({
  imports: [
    MongooseModule.forRoot(''), 
    HealthModule, 
    UsersModule, 
    OrdersModule, MessengersModule],
})
export class AppModule {}
