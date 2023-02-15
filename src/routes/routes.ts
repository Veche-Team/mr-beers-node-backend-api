import { Request, Response, Router } from "express";

import beveragesRouter from './beverages.route';
// const songsRouter = require('./songs.route');

const appRouter = Router();

appRouter.use('/beverages', beveragesRouter);
// appRouter.use('/songs', songsRouter);
appRouter.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'This is api page. Nothing here yet.' });
});

export default appRouter;