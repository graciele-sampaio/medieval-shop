import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class ProductController {
  public orderService = new OrderService();
  
  public async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  }
}