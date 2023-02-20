import { Request, Response, Router } from "express";

import beveragesRouter from './beverages.route';
import snacksRouter from './snacks.route';

const appRouter = Router();

appRouter.use('/beverages', beveragesRouter);
appRouter.use('/snacks', snacksRouter);

appRouter.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'This is api page. Nothing here yet.' });
});

export default appRouter;