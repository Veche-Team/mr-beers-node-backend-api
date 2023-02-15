import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()

const getBeverages = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {

  }
}

const getOneBeverage = async (req: Request, res: Response) => {
  try {

  } catch (error) {
    
  }
}

const createBeverage = async (req: Request, res: Response) => {
  const { name, type, price, description, volume, alcPercentage } = req.body;
  try {
    const result = await prisma.beverages.create({
      data: {
        name,
        type,
        price,
        description,
        volume,
        alcPercentage,
      },
    });
    res.json(result);
  } catch (error) {}
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