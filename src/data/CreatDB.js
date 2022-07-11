import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/data/database.db');

const VEHICLE_SCHEMA = `CREATE TABLE IF NOT EXISTS Vehicle
    (id INTEGER PRIMARY KEY,
        name: TEXT;
        description: TEXT;
        plate: TEXT;
        favorite: INTEGER;
        year:INTEGER;
        color: TEXT;
        price:INTEGER;)`

    function createTableVehicle() {
        db.run(VEHICLE_SCHEMA, error => {
            if (error) {
                console.log(error);
            }
        })
    }
    
    db.serialize(()=> {
        createTableVehicle();
    });