import { User } from "src/users/schemas/user.schema";
import { MessengerDto } from "../../messengers/dto/messenger.dto";

export class ProductDto {
  name: string;
  desc: string;
  amount: number;
  quantity: number;
}

export class OrderDto {
  readonly user: User;
  readonly messenger?: MessengerDto;
  readonly total: number;
  readonly product: ProductDto[];
  readonly createdAt?: Date;
  readonly status: string;
}