export interface IProduct {
  name: string;
  amount: string;
  orderId: number;
}

export interface IProductID extends IProduct{
  id: number;
}