import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./src/data/database.db');

//Processamento de sinal
process.on('SIGINT', () =>
    db.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export default db;