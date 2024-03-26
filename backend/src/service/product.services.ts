import {Product} from '../entity/Product';
import {ProductRepository} from '../repository/product.repo';

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(limit: number, offset: number): Promise<[Product[], number]> {
    return await this.productRepository.findAll(limit, offset);
  }
}
