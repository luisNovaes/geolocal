import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CepCidade} from '../models';
import {CepCidadeRepository} from '../repositories';

export class CepCidadeController {
  constructor(
    @repository(CepCidadeRepository)
    public cepCidadeRepository : CepCidadeRepository,
  ) {}

  @post('/cep-cidades')
  @response(200, {
    description: 'CepCidade model instance',
    content: {'application/json': {schema: getModelSchemaRef(CepCidade)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CepCidade, {
            title: 'NewCepCidade',
            exclude: ['id'],
          }),
        },
      },
    })
    cepCidade: Omit<CepCidade, 'id'>,
  ): Promise<CepCidade> {
    return this.cepCidadeRepository.create(cepCidade);
  }

  @get('/cep-cidades/count')
  @response(200, {
    description: 'CepCidade model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CepCidade) where?: Where<CepCidade>,
  ): Promise<Count> {
    return this.cepCidadeRepository.count(where);
  }

  @get('/cep-cidades')
  @response(200, {
    description: 'Array of CepCidade model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CepCidade, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CepCidade) filter?: Filter<CepCidade>,
  ): Promise<CepCidade[]> {
    return this.cepCidadeRepository.find(filter);
  }

  @patch('/cep-cidades')
  @response(200, {
    description: 'CepCidade PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CepCidade, {partial: true}),
        },
      },
    })
    cepCidade: CepCidade,
    @param.where(CepCidade) where?: Where<CepCidade>,
  ): Promise<Count> {
    return this.cepCidadeRepository.updateAll(cepCidade, where);
  }

  @get('/cep-cidades/{id}')
  @response(200, {
    description: 'CepCidade model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CepCidade, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CepCidade, {exclude: 'where'}) filter?: FilterExcludingWhere<CepCidade>
  ): Promise<CepCidade> {
    return this.cepCidadeRepository.findById(id, filter);
  }

  @patch('/cep-cidades/{id}')
  @response(204, {
    description: 'CepCidade PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CepCidade, {partial: true}),
        },
      },
    })
    cepCidade: CepCidade,
  ): Promise<void> {
    await this.cepCidadeRepository.updateById(id, cepCidade);
  }

  @put('/cep-cidades/{id}')
  @response(204, {
    description: 'CepCidade PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cepCidade: CepCidade,
  ): Promise<void> {
    await this.cepCidadeRepository.replaceById(id, cepCidade);
  }

  @del('/cep-cidades/{id}')
  @response(204, {
    description: 'CepCidade DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cepCidadeRepository.deleteById(id);
  }
}
