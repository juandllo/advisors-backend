import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AccountService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    console.log(`Se he encontrado al usuario ${JSON.stringify(user)}`);

    if (!user) throw new NotFoundException(`El usuario ${email} no existe.`);

    const validPassword = await compare(password, user.password);

    if (!validPassword) throw new HttpException('INVALID_PASSWORD', 403);

    const payload = { sub: user.email, ...user };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
