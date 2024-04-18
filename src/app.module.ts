import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { MessengersModule } from './messengers/messengers.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://advisor:vzQJRMoAbkOPmsn1@cluster0.wbhsxbs.mongodb.net/advisors',
    ),
    HealthModule,
    UsersModule,
    OrdersModule,
    MessengersModule,
    AccountModule,
  ],
})
export class AppModule {}
