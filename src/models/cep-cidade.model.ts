import {Entity, model, property} from '@loopback/repository';

@model()
export class CepCidade extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  localidade: string;

  @property({
    type: 'string',
    required: true,
  })
  faixa_cep: string;

  @property({
    type: 'string',
    required: true,
  })
  cep_inicial: string;

  @property({
    type: 'string',
    required: true,
  })
  cep_final: string;

  @property({
    type: 'string',
    required: true,
  })
  situacao: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_faixa: string;


  constructor(data?: Partial<CepCidade>) {
    super(data);
  }
}

export interface CepCidadeRelations {
  // describe navigational properties here
}

export type CepCidadeWithRelations = CepCidade & CepCidadeRelations;
