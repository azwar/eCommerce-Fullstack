import {Request, Response} from 'express';
import express from 'express';
import {ProductService} from '../service/product.services';
import {ProductRepository} from '../repository/product.repo';
const router = express.Router();

const productRepo = new ProductRepository();
const productSvc = new ProductService(productRepo);

interface IReqQueryPaging {
  offset: number;
}

router.get(
  '/',
  async (req: Request<{}, {}, {}, IReqQueryPaging>, res: Response) => {
    const {offset = 0} = req.query;

    try {
      const list = await productSvc.findAll(6, offset);
      res.send(list);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: 'error',
        error: error,
      });
    }
  }
);

export const productRouter = router;
