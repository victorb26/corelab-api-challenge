import { Router } from "express";
import { vehicleController } from "../controllers/vehiclesController";

const vehicleRouter = Router();
vehicleRouter.get('/', vehicleController.listVehicles);
vehicleRouter.get('/:id', vehicleController.getVehicle);
vehicleRouter.post('/', vehicleController.insertVehicle);
vehicleRouter.put('/:id', vehicleController.updateVehicle);
vehicleRouter.delete('/:id', vehicleController.deleteVehicle);

export {vehicleRouter};