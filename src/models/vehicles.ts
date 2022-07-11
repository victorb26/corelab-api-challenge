import { dbQuery, dbQueryFirst } from "../services/db";

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
    return getVehicle(retorno[0].Id);
}

const listVehicles = async () => {
    const retorno = await dbQuery('SELECT * FROM vehicle');
    return retorno as Vehicles[];
}

const getVehicle = async (id:number) => {
    const retorno = await dbQueryFirst('SELECT * FROM vehicle WHERE id=?, [id]');
    return retorno as Vehicles | undefined;
}
const deleteVehicle = async (id: number) => {
    await dbQueryFirst(`DELETE FROM product WHERE id = ?`, [id]);
}

const updateVehicle = async (vehicle: Vehicles) => {
    await dbQuery(`UPDATE vehicle SET name = ?, description = ?, plate = ?, favorite = ?, year = ?, color = ?, price = ?, WHERE id = ?`, [vehicle.name, vehicle.descripton, vehicle.plate, vehicle.favorite, vehicle.year, vehicle.color, vehicle.price])
    return getVehicle(vehicle.id);
}

export const vehicleModel = {
    insertVehicle,
    listVehicles,
    getVehicle,
    deleteVehicle,
    updateVehicle
}