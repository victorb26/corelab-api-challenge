import express from 'express';
import VehicleController from '../controllers/vehicleController.js';

const router = express.Router();

router.get('/vehicles', VehicleController.selectVehicles);
router.get('/vehicle/:id', VehicleController.selectVehicle);
router.post('/vehicle', VehicleController.insertVehicle);
router.put('/vehicle', VehicleController.updateVehicle);
router.delete('/vehicle/:id', VehicleController.deleteVehicle);

export default router;