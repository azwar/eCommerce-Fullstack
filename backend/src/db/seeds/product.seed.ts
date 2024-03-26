import {Product} from '../../entity/Product';
import {DataSource} from 'typeorm';
import {data} from './sample.products';

export async function seedProduct(connection: DataSource): Promise<DataSource> {
  const productRepo = connection.getRepository(Product);
  const entities = data.map(data => productRepo.create(data));

  try {
    await productRepo.save(entities);
  } catch (error) {
    console.error('Seed application Error', error);
  }

  return connection;
}
