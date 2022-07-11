import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import express,{Request, Response} from  "express";
import { useRoutes } from './Routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

useRoutes(app);

app.get('/', (req:Request, res: Response)=>
res.json({
    msg:'Ok'
}))

app.listen (PORT, () => console.log("Servidor iniciado na porta" +  PORT));