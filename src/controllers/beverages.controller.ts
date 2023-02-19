import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getBeverages = async (req: Request, res: Response) => {
  try {
    const beverages = await prisma.beverages.findMany();
    
    return res.status(200).json({ data: beverages });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const getOneBeverage = async (req: Request, res: Response) => {
  const { beverageUID } = req.params;
  try {
    const beverage = await prisma.beverages.findUnique({
      where: { UID: beverageUID },
    });

    return res.status(200).json({ data: beverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const createBeverage = async (req: Request, res: Response) => { 
  const { name, type, price, description, volume, alcPercentage } = req.body;
  try {   
    const createPayload = {
      data: {
        name, 
        type,
        price,
        description,
        volume,
        alcPercentage,
      },
    };
    const isBeverageNameExists = await prisma.beverages.findFirst({
      where: { name },
    });

    if (isBeverageNameExists) {
      return res.status(400).json({ msg: 'Beverage with this name already exists', existingBeverage: isBeverageNameExists })
    }

    const createdBeverage = await prisma.beverages.create(createPayload);
    
    return res.status(200).json({ msg: `Beverage was created`, createdBeverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const beveragesController = {
  getBeverages,
  getOneBeverage,
  createBeverage,
  // delete: deleteArtistController,
  // edit: editArtistController,
  // getOne: getOneArtistsController,
};

export default beveragesController;
