import db from '../data/ConfigDB.js';
import Vehicle from '../models/Vehicle.js';
import VehicleDAO from '../DAO/VehicleDAO.js';
import res from 'express/lib/response.js';

const vehicleDAO = new VehicleDAO(db);

export default class VehicleController {
    
    static async selectVehicles(req, res) {
        try {
            let vehicles = await vehicleDAO.selectVehicles();
            res.json(vehicles);
        } catch (err) {
            res.status(400).json(err);
        }
    }

    static async selectVehicle(req, res) {
        const id = req.params.id;

        try {
            let vehicle = await vehicleDAO.selectVehicle(id);
            res.status(200).json(vehicle);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async insertVehicle(req, res) {
        const body = req.body;
        const vehicle = new Vehicle(body.name, body.description, body.plate, body.favorite, body.year, body.color, body.price);

        try {
            let result = await vehicleDAO.insertVehicle(vehicle);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async updateVehicle(req, res) {
        const vehicle = req.body;

        try {
            let result = await vehicleDAO.updateVehicle(vehicle);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static async deleteVehicle(req, res) {
        const id = req.params.id;

        try {
            let result = await vehicleDAO.deleteVehicle(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}