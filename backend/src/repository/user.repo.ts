import * as bcrypt from 'bcrypt';
import {dataSource} from '../configs/data-source';
import {DataSource, Repository} from 'typeorm';
import {IUser, User} from '../entity/User';

export class UserRepository {
  dataSource: DataSource;
  repo: Repository<User>;

  constructor() {
    this.dataSource = dataSource;
    this.repo = dataSource.getRepository(User);
  }

  async createUser(user: IUser): Promise<User> {
    const tmpUser = this.repo.create(user);

    try {
      return this.repo.save(tmpUser);
    } catch (error) {
      console.error(error);
      throw new Error('createUser failed');
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repo.findOne({where: {email}});
  }

  async decreasePoint(
    email: string,
    pricePoint: number
  ): Promise<User | undefined> {
    const user = await this.repo.findOne({where: {email}});

    if (user.point < pricePoint) {
      throw new Error('Not enought point');
    }

    user.point = user.point - pricePoint;
    return user;
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.findByEmail(email);
    console.log('login', user);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
}
