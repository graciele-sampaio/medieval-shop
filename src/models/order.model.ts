import { IOrder } from '../interfaces/IOrder';
import mysql from './connection';

export default class ProductModel {
  private connection = mysql;

  public async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute(
      `SELECT o.id, o.userId, 
      JSON_ARRAYAGG(p.id) AS productsIds 
      FROM Trybesmith.Orders As o
      INNER JOIN Trybesmith.Products As p
      ON p.orderId = o.id
      GROUP BY o.id`,
    );
    return rows as IOrder[];
  }
}
