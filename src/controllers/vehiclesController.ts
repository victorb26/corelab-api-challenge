import { Request, Response } from "express";
import { vehicleModel, Vehicles } from "../models/vehicles";
import { badRequest, internalServerError } from "../services/util";

const insertVehicle = (req: Request, res: Response) => {
  {
    const vehicle = req.body;
    if (!vehicle) return badRequest(res, "Informação inválida");

    if (!vehicle.name) return badRequest(res, "Informe um nome válido");

    if (!(parseFloat(vehicle.price)>0))
      return badRequest(res, "Informe um preço válido");

  }
  const vehicle = req.body as Vehicles;
  vehicleModel.insertVehicle(vehicle)
  .then(id =>{
    res.json({
        id
    })
  })
  .catch(err => internalServerError(res,err));
};

export const vehicleController = {
    insertVehicle
}