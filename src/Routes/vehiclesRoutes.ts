import { Router } from "express";
import { vehicleController } from "../controllers/vehiclesController";

const vehicleRouter = Router();
vehicleRouter.post('/',vehicleController.insertVehicle);

export {vehicleRouter};