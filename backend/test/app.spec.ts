import {DataSource} from 'typeorm';
import {} from '../src/service/product.services';
import {dataSource} from '../src/configs/data-source';

describe('Test Application', () => {
  let connection: DataSource;

  before(async () => {
    connection = await dataSource.initialize();
  });

  after(async () => {
    await connection?.destroy();
  });
});
