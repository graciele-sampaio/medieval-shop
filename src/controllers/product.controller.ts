import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public productService = new ProductService();

  public async create(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  }
  
  public async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }
}