import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'postgres',
};

@lifeCycleObserver('datasource')
export class BaseDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cepCidade';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cepCidade', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
