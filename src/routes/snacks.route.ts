import { Router } from 'express';

import snacksController from '../controllers/snacks.controller';
import upload from '../middlewares/imageUpload';

const snacksRouter = Router();

snacksRouter.get('/', snacksController.getSnacks); 
snacksRouter.get('/:snackUID', snacksController.getOneSnack); 
snacksRouter.post('/add-snack', upload.single('snackImage'), snacksController.createSnack); 
snacksRouter.delete('/:snackUID', snacksController.deleteSnack); 
snacksRouter.put('/:snackUID', upload.single('snackImage'), snacksController.editSnack); 

export default snacksRouter;