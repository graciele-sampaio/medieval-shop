import express from 'express';
import productRoutes from './routes/product.router';
import userRoutes from './routes/user.router';
import orderRoutes from './routes/order.router';
import httpErrorMiddleware from './middlewares/httpErrorMiddleware';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use(httpErrorMiddleware);

export default app;
