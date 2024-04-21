export class Role {
  readonly roleName: string;
}

export class UserDto {
  readonly name: string;
  readonly lastName: string;
  readonly cellphone: string;
  readonly address: string;
  readonly email: string;
  readonly roles: Role[];
  password: string;
}
