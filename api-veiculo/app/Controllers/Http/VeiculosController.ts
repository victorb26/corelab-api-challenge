import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veiculo from 'App/Models/Veiculo'

export default class VeiculosController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const veiculo = await Veiculo.create(body)

    response.status(201)

    return {
      message: 'Veículo adicionado com sucesso!',
      data: veiculo,
    }
  }

  public async  index() {
    
const veiculos = await Veiculo.all()

return {
    data: veiculos,
}

  }

  public async show({}) {

  }
}
