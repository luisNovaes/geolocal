import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BaseDataSource} from '../datasources';
import {CepCidade, CepCidadeRelations} from '../models';

export class CepCidadeRepository extends DefaultCrudRepository<
  CepCidade,
  typeof CepCidade.prototype.id,
  CepCidadeRelations
> {
  constructor(
    @inject('datasources.cepCidade') dataSource: BaseDataSource,
  ) {
    super(CepCidade, dataSource);
  }
}
