import {dataSource, getDataSource} from '../configs/data-source';
import {Product} from '../entity/Product';
import {DataSource, Repository} from 'typeorm';

export class ProductRepository {
  dataSource: DataSource;
  repo: Repository<Product>;

  constructor() {
    this.dataSource = dataSource;
    this.repo = dataSource.getRepository(Product);
  }

  async findAll(
    limit: number = 6,
    offset: number = 0
  ): Promise<[Product[], number]> {
    return await this.repo.findAndCount({take: limit, skip: offset});
  }
}
