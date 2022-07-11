import express from 'express';
import vehicles from './vehiclesRoutes.js';


const routes = app => {
    app.route('/').get((req, res) => {
        res.json({
            "statusCode": 200,
            "message": "Bem vindo à Corel Cars!"
        });
    })

    app.use(
        express.json(),
        vehicles
        
    )
}

export default routes;