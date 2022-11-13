import { IProduct, IProductID } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public product = new ProductModel();

  public create(productData: IProduct): Promise<IProductID> {
    return this.product.create(productData);
  }

  public async getAll(): Promise<IProductID[]> {
    const products = await this.product.getAll();
    return products;
  }
}