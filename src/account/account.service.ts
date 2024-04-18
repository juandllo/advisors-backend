import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    // TODO adicionar la validacion de la contrasena
    console.log(`el password del usuario ${username} es -> ${pass}`);
    console.log(`respuesta del servicio ${JSON.stringify(user)}`);

    const payload = { sub: user.lastName, username: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
