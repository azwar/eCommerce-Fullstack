import {User} from '../../entity/User';
import {DataSource} from 'typeorm';

export async function seedUsers(connection: DataSource) {
  const userRepo = connection.getRepository(User);

  const feedDatas = [
    {
      email: 'user_a@domain.com',
      firstName: 'UserA',
      lastName: 'Lastname',
      password: '123123',
    },
    {
      email: 'user_b@domain.com',
      firstName: 'UserB',
      lastName: 'Lastname',
      password: '123123',
    },
    {
      email: 'user_c@domain.com',
      firstName: 'UserC',
      lastName: 'Lastname',
      password: '123123',
    },
  ];

  /**
   * Seed user A, B, C
   */
  const userA = userRepo.create(feedDatas[0]);
  await userA.save();

  const userB = userRepo.create(feedDatas[1]);
  await userB.save();

  const userC = userRepo.create(feedDatas[2]);
  await userC.save();
}
