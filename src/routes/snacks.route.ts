import { Router } from 'express';

import snacksController from '../controllers/snacks.controller';

const snacksRouter = Router();

snacksRouter.get('/', snacksController.getSnacks); 
snacksRouter.get('/:snackUID', snacksController.getOneSnack); 
snacksRouter.post('/add-snack', snacksController.createSnack); 
snacksRouter.delete('/:snackUID', snacksController.deleteSnack); 
snacksRouter.put('/:snackUID', snacksController.editSnack); 

export default snacksRouter;