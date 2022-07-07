import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veiculo from 'App/Models/Veiculo'
import bodyParserConfig from 'Config/bodyparser'

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

  public async index() {
    const veiculos = await Veiculo.all()

    return {
      data: veiculos,
    }
  }

  public async show({ params }: HttpContextContract) {
    const veiculo = await Veiculo.findOrFail(params.id)

    return {
      data: veiculo,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const veiculo = await Veiculo.findOrFail(params.id)

    await veiculo.delete()

    return {
      message: 'Veículo excluído com sucesso!',
      data: veiculo,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const veiculo = await Veiculo.findOrFail(params.id)

    veiculo.name = body.name
    veiculo.description = body.description
    veiculo.plate = body.plate
    veiculo.favorite = body.favorite
    veiculo.year = body.year
    veiculo.color = body.color
    veiculo.price = body.price

    await veiculo.save()

    return {
      message: 'Veículo atualizado com sucesso!',
      data: veiculo,
    }
  }
}
