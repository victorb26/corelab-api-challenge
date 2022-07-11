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

const listVehicles = async () => {
    const retorno = await dbQuery('SELECT * FROM vehicle');
    return retorno as Vehicles[];
}

export const vehicleModel = {
    insertVehicle,
    listVehicles
}