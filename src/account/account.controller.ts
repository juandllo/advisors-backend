import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AccountGuard } from './account.guard';
import { AccountService } from './account.service';

@Controller({
  path: 'account',
  version: '1',
})
export class AccountController {
  constructor(private accountService: AccountService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.accountService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AccountGuard)
  @Get('profile')
  getProfile() {
    return { message: 'el token es valido para este endpoint' };
  }
}
