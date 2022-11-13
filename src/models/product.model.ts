import { ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductID } from '../interfaces/IProduct';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  public async create(product: IProduct): Promise<IProductID> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    return { id: insertId, ...product };
  }
}
