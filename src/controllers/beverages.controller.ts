import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

import { OBJECT_NOT_FOUND, INCORRECT_PAYLOAD } from "../consts/errors.const";

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

    if (!beverage) {
      return res
        .status(400)
        .json({
            data: null,
            error: OBJECT_NOT_FOUND,
            errorDscription: "Beverage with this UID doesn`t exist", 
            beverage });
    }

    return res.status(200).json({ data: beverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const createBeverage = async (req: Request, res: Response) => { 
  let { name, type, price, description, volume, alcPercentage } = req.body;
  price = parseInt(price);
  volume = parseInt(volume);
  alcPercentage = parseInt(alcPercentage);
  const imagePath = req.file?.path;
  try {   
    const createPayload = {
      data: {
        name, 
        type,
        price,
        description,
        volume,
        alcPercentage,
        imagePath
      },
    };

    const isBeverageNameExists = await prisma.beverages.findFirst({
      where: { name },
    });

    if (isBeverageNameExists) {
      return res
        .status(400)
        .json({
          error: INCORRECT_PAYLOAD,
          errorDscription: "Beverage with this name already exists",
          existingBeverage: isBeverageNameExists,
          });
    }

    const createdBeverage = await prisma.beverages.create(createPayload);
    
    return res.status(200).json({ msg: `Beverage was created`, createdBeverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const deleteBeverage = async (req: Request, res: Response) => {
  const { beverageUID } = req.params;
  try {
    const beverage = await prisma.beverages.findUnique({
      where: { UID: beverageUID },
    });

    if (!beverage) {
      return res
        .status(400)
        .json({
            data: null,
            error: OBJECT_NOT_FOUND,
            errorDscription: "Beverage with this UID doesn`t exist", 
            beverage });
    }

    const deletedBeverage = await prisma.beverages.delete({
      where: { UID: beverageUID },
    });

    return res.status(200).json({ msg: 'Beverage was successfully deleted', deletedBeverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage });
  }
};

const editBeverage = async (req: Request, res: Response) => {
  const { beverageUID } = req.params;
  const { name, type, price, description, volume, alcPercentage } = req.body;
  const imagePath = req.file?.path;
  try {    
    const beverage = await prisma.beverages.findUnique({
      where: { UID: beverageUID },
    });

    if (!beverage) {
      return res
        .status(400)
        .json({
            data: null,
            error: OBJECT_NOT_FOUND,
            errorDscription: "Beverage with this UID doesn`t exist", 
            beverage });
    }

    const updatedBeverage = await prisma.beverages.update({
      where: { UID: beverageUID },
      data: {
        name,
        type,
        price,
        description,
        volume,
        alcPercentage,
        imagePath
      },
    });

    return res.status(200).json({ msg: 'Beverage was successfully updated', updatedBeverage });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return res.status(400).json({ msg: errorMessage, error });
  }
};

const beveragesController = {
  getBeverages,
  getOneBeverage,
  createBeverage,
  deleteBeverage,
  editBeverage,
};

export default beveragesController;
