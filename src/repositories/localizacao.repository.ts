import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BaseDataSource} from '../datasources';
import {Localizacao, LocalizacaoRelations} from '../models';

export class LocalizacaoRepository extends DefaultCrudRepository<
  Localizacao,
  typeof Localizacao.prototype.id,
  LocalizacaoRelations
> {
  constructor(
    @inject('datasources.base') dataSource: BaseDataSource,
  ) {
    super(Localizacao, dataSource);
  }
}
