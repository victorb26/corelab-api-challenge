import { Application, Router } from "express";
import { vehicleRouter } from "./vehiclesRoutes";

export const useRoutes = (app: Application) =>{
    const apiRouter = Router();
    apiRouter.use('/vehicles', vehicleRouter);

    app.use('/api/v1', apiRouter)
}