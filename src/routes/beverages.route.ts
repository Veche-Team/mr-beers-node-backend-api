import { Router } from 'express';

import beveragesController from '../controllers/beverages.controller';

const beveragesRouter = Router();

beveragesRouter.get('/', beveragesController.getBeverages); 
beveragesRouter.get('/:beverageUID', beveragesController.getOneBeverage); 
beveragesRouter.post('/add-beverage', beveragesController.createBeverage); 
beveragesRouter.delete('/:beverageUID', beveragesController.deleteBeverage); 
beveragesRouter.put('/:beverageUID', beveragesController.editBeverage); 

export default beveragesRouter;