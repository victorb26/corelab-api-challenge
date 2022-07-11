export default class vehicleDAO {

    constructor(db) {
        this.db = db;
    }

    async selectVehicles() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Vehicle`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectVehicle(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Vehicle WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertVehicle(Vehicle) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Vehicle (name, description, plate, favorite, year, color, price) VALUES (?,?,?,?,?,?,?)`, [Vehicle.name, Vehicle.description, Vehicle.plate, Vehicle.favorite, Vehicle.year, Vehicle.color, Vehicle.price], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Anúncio inserido com sucesso`);
                }
            })
        })
    }

    async updateVehicle(Vehicle) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Vehicle SET name = ?, description = ?, plate = ?, favorite = ?, year = ?, color = ?, price =? WHERE ID=?`,[Vehicle.name, Vehicle.description, Vehicle.plate, Vehicle.favorite, Vehicle.year, Vehicle.color, Vehicle.price], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Anúncio atualizado com sucesso`);
                }
            })
        })
    }

    async deleteVehicle(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Vehicle WHERE ID = ?`, [id], error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Anúncio removido com sucesso`);
                }
            })
        })
    }

}