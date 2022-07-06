// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class VehiclesController {
    public async create ({request}: HttpContextContract) {
        const data = request.only(["name", "username"]);
        console.log(data);
    }
}
