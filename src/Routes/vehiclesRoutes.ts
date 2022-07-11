import { Request, Response } from "express";
import { Vehicles } from "../models/vehicles";
import { badRequest } from "../services/util";

const insertVehicle = (req: Request, res: Response) => {
  {
    const vehicle = req.body.vehicle;
    if (!vehicle) return badRequest(res, "Informação inválida");

    if (!vehicle.name) return badRequest(res, "Informe um nome válido");

    if (parseFloat(vehicle.price) > 0)
      return badRequest(res, "Informe um preço válido");

    if (vehicle.year > 1900) return badRequest(res, "Informe um ano válido");
  }
  const vehicle = req.body.vehicle as Vehicles;
};
