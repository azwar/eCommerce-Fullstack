import {IUser, User} from '../entity/User';
import {UserRepository} from '../repository/user.repo';

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async login(email: string, password: string): Promise<User> {
    return await this.repository.login(email, password);
  }

  async register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<User> {
    const user: IUser = {
      email,
      password,
      firstName,
      lastName,
    };
    return await this.repository.createUser(user);
  }
}
