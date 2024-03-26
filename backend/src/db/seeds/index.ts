import {dataSource} from '../../configs/data-source';
import {seedProduct} from './product.seed';
import {seedUsers} from './user.seed';

const seeding = async () => {
  console.log('Seeding start');
  const connection = await dataSource.initialize();

  await seedProduct(connection);
  await seedUsers(connection);

  connection.destroy();
};

seeding()
  .then(() => console.log('Seeding finish'))
  .catch(e => console.log(e));
