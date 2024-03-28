import {productRouter} from './src/controller/product.controller';
import {userRouter} from './src/controller/user.controller';
import {orderRouter} from './src/controller/order.controller';

import {globalError as errorCatcher} from './src/helpers/error';
import express, {Response} from 'express';
import cors from 'cors';
import {IRequest} from './src/base/IRequest';
import dotenv from 'dotenv';
import {initDB} from './src/configs/data-source';

dotenv.config();

const app = express();
const port = process.env.PORT;

initDB();
app.use(express.json());
app.use(cors());

app.get('/', (req: IRequest, res: Response) => {
  res.send('Server is running');
});

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/product', productRouter);
app.use(errorCatcher);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
