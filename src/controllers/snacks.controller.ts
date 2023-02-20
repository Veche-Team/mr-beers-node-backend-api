import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getSnacks = async (req: Request, res: Response) => {
  try {
    const snacks = await prisma.snacks.findMany();
    
    return res.status(200).json({ data: snacks });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const getOneSnack = async (req: Request, res: Response) => {
  const { snackUID } = req.params;
  try {
    const snack = await prisma.snacks.findUnique({
      where: { UID: snackUID },
    });

    if (!snack) {
      return res.status(400).json({ msg: 'Snack with this UID doesn`t exist', snackUID })
    }

    return res.status(200).json({ data: snack });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const createSnack = async (req: Request, res: Response) => { 
  const { name, type, price, description } = req.body;
  try {   
    const createPayload = {
      data: {
        name, 
        type,
        price,
        description
      },
    };
    const isSnackNameExists = await prisma.snacks.findFirst({
      where: { name },
    });

    if (isSnackNameExists) {
      return res.status(400).json({ msg: 'Snack with this name already exists', existingSnack: isSnackNameExists })
    }

    const createdSnack = await prisma.snacks.create(createPayload);
    
    return res.status(200).json({ msg: `Snack was created`, createdSnack });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const deleteSnack = async (req: Request, res: Response) => {
  const { snackUID } = req.params;
  try {
    const snack = await prisma.snacks.findUnique({
      where: { UID: snackUID },
    });

    if (!snack) {
      return res.status(400).json({ msg: 'Snack with this UID doesn`t exist', snackUID })
    }

    const deletedSnack = await prisma.snacks.delete({
      where: { UID: snackUID },
    });

    return res.status(200).json({ msg: 'Snack was successfully deleted', deletedSnack });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const editSnack = async (req: Request, res: Response) => {
  const { snackUID } = req.params;
  const { name, type, price, description } = req.body;
  try {    
    const snack = await prisma.snacks.findUnique({
      where: { UID: snackUID },
    });

    if (!snack) {
      return res.status(400).json({ msg: 'Snack with this UID doesn`t exist', snackUID })
    }

    const updatedSnack = await prisma.snacks.update({
      where: { UID: snackUID },
      data: {
        name,
        type,
        price,
        description
      },
    });

    return res.status(200).json({ msg: 'Snack was successfully updated', updatedSnack });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage, error });
  }
};

const snacksController = {
  getSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  editSnack,
};

export default snacksController;
