import { Router } from "express";
import { vehicleController } from "../controllers/vehiclesController";

const vehicleRouter = Router();
vehicleRouter.post('/',vehicleController.insertVehicle);
vehicleRouter.get('/',vehicleController.listVehicles);

export {vehicleRouter};