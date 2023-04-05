import { Router } from 'express';

import beveragesController from '../controllers/beverages.controller';
import upload from '../middlewares/imageUpload';

const beveragesRouter = Router();

beveragesRouter.get('/', beveragesController.getBeverages); 
beveragesRouter.get('/:beverageUID', beveragesController.getOneBeverage); 
beveragesRouter.post('/add-beverage', upload.single('beverageImage'), beveragesController.createBeverage); 
beveragesRouter.delete('/:beverageUID', beveragesController.deleteBeverage); 
beveragesRouter.put('/:beverageUID', upload.single('beverageImage'), beveragesController.editBeverage); 

export default beveragesRouter;