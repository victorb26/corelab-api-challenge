import { Request, Response } from "express";
import { vehicleModel, Vehicles } from "../models/vehicles";
import { badRequest, internalServerError, validateNumber, okay, notFound  } from "../services/util";

const insertVehicle = (req:Request, res:Response) => {
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

const listVehicles = (req:Request, res:Response) =>{
    vehicleModel.listVehicles()
  .then(vehicles =>{
    res.json({
        vehicles
    })
  })
  .catch(err => internalServerError(res,err));
}

const getVehicle = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return vehicleModel.getVehicle(id)
        .then((vehicle) => {
            if(vehicle)
                return res.json(vehicle);
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const updateVehicle = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const vehicles = req.body;
        if (!vehicles)
            return badRequest(res, "Informação inválida");

        if (!vehicles.name)
            return badRequest(res, 'Informe o nome do produto');

        if (!validateNumber(vehicles.price))
            return badRequest(res, 'Informe o preço');

        const vehiclesSaved = await vehicleModel.getVehicle(id);
        if(!vehiclesSaved)
            return notFound(res);
    }

    const vehicles = req.body as Vehicles;
    return vehicleModel.updateVehicle(vehicles)
        .then(vehicles => {
            res.json(vehicles)
        })
        .catch(err => internalServerError(res, err));
}

const deleteVehicle = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const vehicleSaved = await vehicleModel.getVehicle(id);
        if(!vehicleSaved)
            return notFound(res);
    }

    return vehicleModel.deleteVehicle(id)
        .then(() => okay(res))
        .catch(err => internalServerError(res, err));
}

export const vehicleController = {
    insertVehicle,
    listVehicles,
    getVehicle,
    deleteVehicle,
    updateVehicle
}

