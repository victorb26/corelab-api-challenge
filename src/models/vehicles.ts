import { dbQuery } from "../services/db";

export type Vehicles = {
    id: number;
    name: string;
    descripton: string;
    plate: string;
    favorite: boolean;
    year:number;
    color: string;
    price:number;
}

const insertVehicle = async (vehicle: Vehicles) =>{
    await dbQuery('INSERT INTO vehicle (name, description, plate, favorite, year, color, price) VALUES(?, ?, ?, ?, ?, ?, ?)', 
    [vehicle.name, vehicle.descripton, vehicle.plate, vehicle.favorite, vehicle.year, vehicle.color, vehicle.price])
    let retorno = await dbQuery('SELECT seq AS Id FROM sqlite_sequence WHERE name = "vehicle"');
    return retorno [0].Id as  number | undefined;
}

export const vehicleModel = {
    insertVehicle
}