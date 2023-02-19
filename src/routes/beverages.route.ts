import { Router } from 'express';

import beveragesController from '../controllers/beverages.controller';

const beveragesRouter = Router();

beveragesRouter.get('/', beveragesController.getBeverages); 
beveragesRouter.get('/:beverageUID', beveragesController.getOneBeverage); 
beveragesRouter.post('/add-beverage', beveragesController.createBeverage); 
// beveragesRouter.put('/:artistId', beveragesController.edit); 
// beveragesRouter.delete('/:artistId', beveragesController.deleteBeverage); 

// beveragesRouter.post('/get-artist', beveragesController.getOne); 

export default beveragesRouter;