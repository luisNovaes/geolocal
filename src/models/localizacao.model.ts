import {Entity, model, property} from '@loopback/repository';

@model()
export class Localizacao extends Entity {
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
  codigoPostal: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  bairro: string;


  constructor(data?: Partial<Localizacao>) {
    super(data);
  }
}

export interface LocalizacaoRelations {
  // describe navigational properties here
}

export type LocalizacaoWithRelations = Localizacao & LocalizacaoRelations;
