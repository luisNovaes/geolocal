import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'postgresql-68950-0.cloudclusters.net',
  port: 19353,
  user: 'root',
  password: 'ma123456',
  database: 'geolocal',
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
